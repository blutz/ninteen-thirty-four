/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * Internal dependencies
 */
import ColorPicker from '../../components/color-picker';
import DateTimePicker from '../../components/date-time-picker';

import countDownApi from './api';

/**
 * WordPress dependencies
 */
const {
    moment,
} = window;

const {
    applyFilters,
} = wp.hooks;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    PanelBody,
    SelectControl,
    RangeControl,
    Toolbar,
} = wp.components;

const {
    InspectorControls,
    InnerBlocks,
    BlockControls,
} = wp.blockEditor;

const {
    compose,
} = wp.compose;

const {
    withSelect,
} = wp.data;

const TIMEZONELESS_FORMAT = 'YYYY-MM-DDTHH:mm:ss';

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    constructor( props ) {
        super( props );

        this.parseData = this.parseData.bind( this );
        this.updateDate = this.updateDate.bind( this );
        this.runInterval = this.runInterval.bind( this );

        this.state = {
            dateData: props.date ? this.parseData( props.attributes.date, props.attributes.units ) : false,
        };
    }

    componentDidMount() {
        const {
            date,
            units,
        } = this.props.attributes;

        // generate date.
        if ( ! date ) {
            const today = new Date();
            const newDate = new Date();
            newDate.setDate( today.getDate() + 1 );

            this.updateDate( newDate, units );
        } else {
            this.updateDate( date, units );
        }
    }

    // eslint-disable-next-line class-methods-use-this
    parseData( date, units ) {
        const momentData = moment( date );
        const formattedDate = momentData.format( TIMEZONELESS_FORMAT );

        const apiData = countDownApi( momentData.toDate(), moment().toDate(), units, 0 );

        return {
            momentData,
            formattedDate,
            delay: countDownApi.getDelay( units ),
            ...apiData,
        };
    }

    updateDate( date, units ) {
        const {
            setAttributes,
            attributes,
        } = this.props;

        const data = this.parseData( date, units );

        this.setState( {
            dateData: data,
        }, () => {
            this.runInterval();
        } );

        if ( data.formattedDate !== attributes.date ) {
            setAttributes( {
                date: data.formattedDate,
            } );
        }
    }

    runInterval() {
        clearInterval( this.interval );

        const {
            dateData,
        } = this.state;

        if ( ! dateData ) {
            return;
        }

        this.interval = setInterval( () => {
            const {
                date,
                units,
            } = this.props.attributes;

            if ( ! date || ! units || ! units.length ) {
                return;
            }

            const data = this.parseData( date, units );

            this.setState( {
                dateData: data,
            } );
        }, dateData.delay );
    }

    render() {
        const {
            attributes,
            setAttributes,
            isSelectedBlockInRoot,
        } = this.props;

        const {
            dateData,
        } = this.state;

        let { className = '' } = this.props;

        const {
            date,
            units,
            unitsAlign,
            numberFontSize,
            labelFontSize,
            numberColor,
            labelColor,
        } = attributes;

        className = classnames(
            'ghostkit-countdown',
            unitsAlign ? `ghostkit-countdown-units-align-${ unitsAlign }` : '',
            className
        );

        className = applyFilters( 'ghostkit.editor.className', className, this.props );

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <DateTimePicker
                            label={ __( 'End Date', 'ghostkit' ) }
                            value={ date }
                            onChange={ ( value ) => this.updateDate( value, units ) }
                        />
                        <SelectControl
                            label={ __( 'Display Units', 'ghostkit' ) }
                            value={ units }
                            onChange={ ( value ) => {
                                setAttributes( { units: value } );
                                this.updateDate( date, value );
                            } }
                            multiple
                            options={ [
                                {
                                    label: __( 'Years', 'ghostkit' ),
                                    value: 'years',
                                }, {
                                    label: __( 'Months', 'ghostkit' ),
                                    value: 'months',
                                }, {
                                    label: __( 'Weeks', 'ghostkit' ),
                                    value: 'weeks',
                                }, {
                                    label: __( 'Days', 'ghostkit' ),
                                    value: 'days',
                                }, {
                                    label: __( 'Hours', 'ghostkit' ),
                                    value: 'hours',
                                }, {
                                    label: __( 'Minutes', 'ghostkit' ),
                                    value: 'minutes',
                                }, {
                                    label: __( 'Seconds', 'ghostkit' ),
                                    value: 'seconds',
                                },
                            ] }
                        />
                    </PanelBody>
                    <PanelBody>
                        <RangeControl
                            label={ __( 'Number Font Size', 'ghostkit' ) }
                            value={ numberFontSize }
                            onChange={ ( value ) => setAttributes( { numberFontSize: value } ) }
                            beforeIcon="editor-textcolor"
                            afterIcon="editor-textcolor"
                        />
                        <RangeControl
                            label={ __( 'Label Font Size', 'ghostkit' ) }
                            value={ labelFontSize }
                            onChange={ ( value ) => setAttributes( { labelFontSize: value } ) }
                            beforeIcon="editor-textcolor"
                            afterIcon="editor-textcolor"
                        />
                        <ColorPicker
                            label={ __( 'Number Color', 'ghostkit' ) }
                            value={ numberColor }
                            onChange={ ( val ) => setAttributes( { numberColor: val } ) }
                            alpha
                        />
                        <ColorPicker
                            label={ __( 'Label Color', 'ghostkit' ) }
                            value={ labelColor }
                            onChange={ ( val ) => setAttributes( { labelColor: val } ) }
                            alpha
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <Toolbar controls={ [
                        {
                            icon: 'align-left',
                            title: __( 'Units Align Left', 'ghostkit' ),
                            onClick: () => setAttributes( { unitsAlign: 'left' } ),
                            isActive: 'left' === unitsAlign,
                        },
                        {
                            icon: 'align-center',
                            title: __( 'Units Align Center', 'ghostkit' ),
                            onClick: () => setAttributes( { unitsAlign: 'center' } ),
                            isActive: 'center' === unitsAlign,
                        },
                        {
                            icon: 'align-right',
                            title: __( 'Units Align Right', 'ghostkit' ),
                            onClick: () => setAttributes( { unitsAlign: 'right' } ),
                            isActive: 'right' === unitsAlign,
                        },
                    ] }
                    />
                </BlockControls>
                <div className={ className }>
                    { units.map( ( unitName ) => {
                        let formattedUnit = false;

                        if ( dateData && 'undefined' !== typeof dateData[ unitName ] ) {
                            const isEnd = 0 <= dateData.value;

                            formattedUnit = countDownApi.formatUnit( isEnd ? 0 : dateData[ unitName ], unitName );
                        }

                        return (
                            <div
                                key={ unitName }
                                className={ classnames( 'ghostkit-countdown-unit', `ghostkit-countdown-unit-${ unitName }` ) }
                            >
                                <span className="ghostkit-countdown-unit-number">
                                    { formattedUnit ? formattedUnit.number : '00' }
                                </span>
                                <span className="ghostkit-countdown-unit-label">
                                    { formattedUnit ? formattedUnit.label : unitName }
                                </span>
                            </div>
                        );
                    } ) }
                </div>
                { isSelectedBlockInRoot ? (
                    <div className="ghostkit-countdown-expire-action">
                        <div className="ghostkit-countdown-expire-action-label">
                            { __( 'Display content after expiration:', 'ghostkit' ) }
                        </div>

                        <div className="ghostkit-countdown-expire-action-content">
                            <InnerBlocks
                                template={ [ [ 'core/paragraph', { content: __( 'This countdown has been ended already!', 'ghostkit' ) } ] ] }
                                templateLock={ false }
                            />
                        </div>
                    </div>
                ) : '' }
            </Fragment>
        );
    }
}

export default compose( [
    withSelect( ( select, ownProps ) => {
        const {
            isBlockSelected,
            hasSelectedInnerBlock,
        } = select( 'core/block-editor' );

        const { clientId } = ownProps;

        return {
            isSelectedBlockInRoot: isBlockSelected( clientId ) || hasSelectedInnerBlock( clientId, true ),
        };
    } ),
] )( BlockEdit );
