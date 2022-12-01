/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * Internal dependencies
 */
import IconPicker from '../../components/icon-picker';
import ToggleGroup from '../../components/toggle-group';
import RangeControl from '../../components/range-control';

/**
 * WordPress dependencies
 */
const { applyFilters } = wp.hooks;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const { PanelBody, ToggleControl } = wp.components;

const { InspectorControls, InnerBlocks } = wp.blockEditor;

const { compose } = wp.compose;

const { withSelect, withDispatch } = wp.data;

const { createBlock } = wp.blocks;

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
  constructor(props) {
    super(props);

    this.updateSlidesCount = this.updateSlidesCount.bind(this);
  }

  /**
   * Updates the slides count
   *
   * @param {number} newSlidesCount New slides count.
   */
  updateSlidesCount(newSlidesCount) {
    const { block, getBlocks, replaceInnerBlocks, slidesCount, removeBlock } = this.props;

    // Remove slider block.
    if (1 > newSlidesCount) {
      removeBlock(block.clientId);

      // Add new slides.
    } else if (newSlidesCount > slidesCount) {
      const newCount = newSlidesCount - slidesCount;
      const newInnerBlocks = [...getBlocks(block.clientId)];

      for (let i = 1; i <= newCount; i += 1) {
        newInnerBlocks.push(createBlock('ghostkit/carousel-slide', { size: 3 }));
      }

      replaceInnerBlocks(block.clientId, newInnerBlocks, false);

      // Remove slides.
    } else if (newSlidesCount < slidesCount) {
      const newInnerBlocks = [...getBlocks(block.clientId)];
      newInnerBlocks.splice(newSlidesCount, slidesCount - newSlidesCount);

      replaceInnerBlocks(block.clientId, newInnerBlocks, false);
    }
  }

  render() {
    const { attributes, setAttributes, slidesCount } = this.props;

    let { className = '' } = this.props;

    const {
      effect,
      speed,
      autoplay,
      autoplayHoverPause,
      slidesPerView,
      centeredSlides,
      loop,
      freeScroll,
      showArrows,
      arrowPrevIcon,
      arrowNextIcon,
      showBullets,
      dynamicBullets,
      gap,
    } = attributes;

    className = classnames(className, 'ghostkit-carousel');

    className = applyFilters('ghostkit.editor.className', className, this.props);

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody>
            <RangeControl
              label={__('Slides', 'ghostkit')}
              value={slidesCount}
              onChange={(value) => this.updateSlidesCount(value)}
              min={2}
              max={20}
              allowCustomMax
            />
          </PanelBody>
          <PanelBody>
            <ToggleGroup
              label={__('Effect', 'ghostkit')}
              value={effect}
              options={[
                {
                  value: 'slide',
                  label: __('Slide', 'ghostkit'),
                },
                {
                  value: 'coverflow',
                  label: __('Coverflow', 'ghostkit'),
                },
                {
                  value: 'fade',
                  label: __('Fade', 'ghostkit'),
                },
              ]}
              onChange={(value) => {
                setAttributes({ effect: value });
              }}
              isAdaptiveWidth
            />
          </PanelBody>
          <PanelBody>
            <RangeControl
              label={__('Speed (seconds)', 'ghostkit')}
              suffix={__('sec', 'ghostkit')}
              value={speed}
              onChange={(value) => setAttributes({ speed: value })}
              min={0}
              max={10}
              step={0.1}
              allowCustomMax
            />
            <RangeControl
              label={__('Autoplay (seconds)', 'ghostkit')}
              value={autoplay}
              onChange={(value) => setAttributes({ autoplay: value })}
              min={0}
              max={20}
              step={0.3}
              allowCustomMax
            />
            {autoplay ? (
              <ToggleControl
                label={__('Pause autoplay on mouse over', 'ghostkit')}
                checked={!!autoplayHoverPause}
                onChange={(val) => setAttributes({ autoplayHoverPause: val })}
              />
            ) : null}
            {'fade' !== effect ? (
              <Fragment>
                <RangeControl
                  label={__('Slides per view', 'ghostkit')}
                  value={slidesPerView}
                  onChange={(value) => setAttributes({ slidesPerView: value })}
                  min={1}
                  max={8}
                  allowCustomMax
                />
                <RangeControl
                  label={__('Gap', 'ghostkit')}
                  value={gap}
                  onChange={(value) => setAttributes({ gap: value })}
                  min={0}
                  max={60}
                  allowCustomMax
                />
              </Fragment>
            ) : (
              ''
            )}
          </PanelBody>
          <PanelBody>
            <ToggleControl
              label={__('Centered slides', 'ghostkit')}
              checked={!!centeredSlides}
              onChange={(val) => setAttributes({ centeredSlides: val })}
            />
            <ToggleControl
              label={__('Loop', 'ghostkit')}
              checked={!!loop}
              onChange={(val) => setAttributes({ loop: val })}
            />
            <ToggleControl
              label={__('Free scroll', 'ghostkit')}
              checked={!!freeScroll}
              onChange={(val) => setAttributes({ freeScroll: val })}
            />
            <ToggleControl
              label={__('Show arrows', 'ghostkit')}
              checked={!!showArrows}
              onChange={(val) => setAttributes({ showArrows: val })}
            />
            {showArrows ? (
              <Fragment>
                <IconPicker
                  label={__('Prev arrow icon', 'ghostkit')}
                  value={arrowPrevIcon}
                  onChange={(value) => setAttributes({ arrowPrevIcon: value })}
                />
                <IconPicker
                  label={__('Next arrow icon', 'ghostkit')}
                  value={arrowNextIcon}
                  onChange={(value) => setAttributes({ arrowNextIcon: value })}
                />
              </Fragment>
            ) : (
              ''
            )}
            <ToggleControl
              label={__('Show bullets', 'ghostkit')}
              checked={!!showBullets}
              onChange={(val) => setAttributes({ showBullets: val })}
            />
            {showBullets ? (
              <ToggleControl
                label={__('Dynamic bullets', 'ghostkit')}
                checked={!!dynamicBullets}
                onChange={(val) => setAttributes({ dynamicBullets: val })}
              />
            ) : (
              ''
            )}
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          <InnerBlocks
            template={[['ghostkit/carousel-slide'], ['ghostkit/carousel-slide']]}
            allowedBlocks={['ghostkit/carousel-slide']}
            orientation="horizontal"
            renderAppender={false}
          />
        </div>
      </Fragment>
    );
  }
}

export default compose([
  withSelect((select, ownProps) => {
    const { getBlock, getBlocks, getBlockCount } = select('core/block-editor');

    const { clientId } = ownProps;

    return {
      getBlocks,
      slidesCount: getBlockCount(clientId),
      block: getBlock(clientId),
    };
  }),
  withDispatch((dispatch) => {
    const { removeBlock, replaceInnerBlocks } = dispatch('core/block-editor');

    return {
      removeBlock,
      replaceInnerBlocks,
    };
  }),
])(BlockEdit);
