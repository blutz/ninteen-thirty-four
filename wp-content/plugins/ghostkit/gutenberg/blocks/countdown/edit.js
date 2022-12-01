/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * Internal dependencies
 */
import ColorPicker from '../../components/color-picker';
import DateTimePicker from '../../components/date-time-picker';
import RangeControl from '../../components/range-control';

import countDownApi from './api';
import { TIMEZONELESS_FORMAT } from './constants';

/**
 * WordPress dependencies
 */
const { GHOSTKIT, luxon } = window;

const { applyFilters } = wp.hooks;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const { PanelBody, SelectControl, ToolbarGroup, ToolbarButton } = wp.components;

const { InspectorControls, InnerBlocks, BlockControls } = wp.blockEditor;

const { compose } = wp.compose;

const { withSelect } = wp.data;

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
  constructor(props) {
    super(props);

    this.parseData = this.parseData.bind(this);
    this.updateDate = this.updateDate.bind(this);
    this.runInterval = this.runInterval.bind(this);

    this.state = {
      dateData: props.date ? this.parseData(props.attributes.date, props.attributes.units) : false,
    };
  }

  componentDidMount() {
    const { date, units } = this.props.attributes;

    // generate date.
    if (!date) {
      const today = new Date();
      const newDate = new Date();
      newDate.setDate(today.getDate() + 1);

      const formattedDate = luxon.DateTime.fromJSDate(newDate).toFormat(TIMEZONELESS_FORMAT);

      this.updateDate(formattedDate, units);
    } else {
      this.updateDate(date, units);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  parseData(date, units) {
    const formattedDate = luxon.DateTime.fromISO(date).toFormat(TIMEZONELESS_FORMAT);
    const currentDate = new Date(
      luxon.DateTime.now().setZone(GHOSTKIT.timezone).toFormat(TIMEZONELESS_FORMAT)
    );

    const apiData = countDownApi(new Date(formattedDate), currentDate, units, 0);

    return {
      formattedDate,
      delay: countDownApi.getDelay(units),
      ...apiData,
    };
  }

  updateDate(date, units) {
    const { setAttributes, attributes } = this.props;

    const data = this.parseData(date, units);

    this.setState(
      {
        dateData: data,
      },
      () => {
        this.runInterval();
      }
    );

    if (data.formattedDate !== attributes.date) {
      setAttributes({
        date: data.formattedDate,
      });
    }
  }

  runInterval() {
    clearInterval(this.interval);

    const { dateData } = this.state;

    if (!dateData) {
      return;
    }

    this.interval = setInterval(() => {
      const { date, units } = this.props.attributes;

      if (!date || !units || !units.length) {
        return;
      }

      const data = this.parseData(date, units);

      this.setState({
        dateData: data,
      });
    }, dateData.delay);
  }

  render() {
    const { attributes, setAttributes, isSelectedBlockInRoot } = this.props;

    const { dateData } = this.state;

    let { className = '' } = this.props;

    const { date, units, unitsAlign, numberFontSize, labelFontSize, numberColor, labelColor } =
      attributes;

    className = classnames(
      'ghostkit-countdown',
      unitsAlign ? `ghostkit-countdown-units-align-${unitsAlign}` : '',
      className
    );

    className = applyFilters('ghostkit.editor.className', className, this.props);

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody>
            <DateTimePicker
              label={__('End Date', 'ghostkit')}
              value={date}
              onChange={(value) => this.updateDate(value, units)}
            />
            <SelectControl
              label={__('Display Units', 'ghostkit')}
              value={units}
              onChange={(value) => {
                setAttributes({ units: value });
                this.updateDate(date, value);
              }}
              multiple
              options={[
                {
                  label: __('Years', 'ghostkit'),
                  value: 'years',
                },
                {
                  label: __('Months', 'ghostkit'),
                  value: 'months',
                },
                {
                  label: __('Weeks', 'ghostkit'),
                  value: 'weeks',
                },
                {
                  label: __('Days', 'ghostkit'),
                  value: 'days',
                },
                {
                  label: __('Hours', 'ghostkit'),
                  value: 'hours',
                },
                {
                  label: __('Minutes', 'ghostkit'),
                  value: 'minutes',
                },
                {
                  label: __('Seconds', 'ghostkit'),
                  value: 'seconds',
                },
              ]}
            />
          </PanelBody>
          <PanelBody>
            <RangeControl
              label={__('Number Font Size', 'ghostkit')}
              value={numberFontSize}
              onChange={(value) => setAttributes({ numberFontSize: value })}
              beforeIcon="editor-textcolor"
              afterIcon="editor-textcolor"
              allowCustomMax
            />
            <RangeControl
              label={__('Label Font Size', 'ghostkit')}
              value={labelFontSize}
              onChange={(value) => setAttributes({ labelFontSize: value })}
              beforeIcon="editor-textcolor"
              afterIcon="editor-textcolor"
              allowCustomMax
            />
            <ColorPicker
              label={__('Number Color', 'ghostkit')}
              value={numberColor}
              onChange={(val) => setAttributes({ numberColor: val })}
              alpha
            />
            <ColorPicker
              label={__('Label Color', 'ghostkit')}
              value={labelColor}
              onChange={(val) => setAttributes({ labelColor: val })}
              alpha
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <ToolbarGroup>
            <ToolbarButton
              icon="align-left"
              title={__('Units Align Left', 'ghostkit')}
              onClick={() => setAttributes({ unitsAlign: 'left' })}
              isActive={'left' === unitsAlign}
            />
            <ToolbarButton
              icon="align-center"
              title={__('Units Align Center', 'ghostkit')}
              onClick={() => setAttributes({ unitsAlign: 'center' })}
              isActive={'center' === unitsAlign}
            />
            <ToolbarButton
              icon="align-right"
              title={__('Units Align Right', 'ghostkit')}
              onClick={() => setAttributes({ unitsAlign: 'right' })}
              isActive={'right' === unitsAlign}
            />
          </ToolbarGroup>
        </BlockControls>
        <div className={className}>
          {units.map((unitName) => {
            let formattedUnit = false;

            if (dateData && 'undefined' !== typeof dateData[unitName]) {
              const isEnd = 0 <= dateData.value;

              formattedUnit = countDownApi.formatUnit(isEnd ? 0 : dateData[unitName], unitName);
            }

            return (
              <div
                key={unitName}
                className={classnames(
                  'ghostkit-countdown-unit',
                  `ghostkit-countdown-unit-${unitName}`
                )}
              >
                <span className="ghostkit-countdown-unit-number">
                  {formattedUnit ? formattedUnit.number : '00'}
                </span>
                <span className="ghostkit-countdown-unit-label">
                  {formattedUnit ? formattedUnit.label : unitName}
                </span>
              </div>
            );
          })}
        </div>
        {isSelectedBlockInRoot ? (
          <div className="ghostkit-countdown-expire-action">
            <div className="ghostkit-countdown-expire-action-label">
              {__('Display content after expiration:', 'ghostkit')}
            </div>

            <div className="ghostkit-countdown-expire-action-content">
              <InnerBlocks
                template={[
                  [
                    'core/paragraph',
                    { content: __('This countdown has been ended already!', 'ghostkit') },
                  ],
                ]}
                templateLock={false}
              />
            </div>
          </div>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select, ownProps) => {
    const { isBlockSelected, hasSelectedInnerBlock } = select('core/block-editor');

    const { clientId } = ownProps;

    return {
      isSelectedBlockInRoot: isBlockSelected(clientId) || hasSelectedInnerBlock(clientId, true),
    };
  }),
])(BlockEdit);
