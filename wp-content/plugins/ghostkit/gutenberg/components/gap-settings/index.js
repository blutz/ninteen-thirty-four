/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    BaseControl,
    Button,
    ButtonGroup,
    RangeControl,
} = wp.components;

/**
 * Internal dependencies
 */
const GAP_VALUES = {
    no: 0,
    sm: 15,
    md: 30,
    lg: 45,
};

/**
 * Component Class
 */
export default class GapSettings extends Component {
    render() {
        const {
            gap,
            gapCustom,
            onChange,
        } = this.props;

        return (
            <BaseControl label={ __( 'Gap', 'ghostkit' ) }>
                <div>
                    <ButtonGroup>
                        {
                            [
                                {
                                    label: __( 'None', 'ghostkit' ),
                                    value: 'no',
                                },
                                {
                                    label: __( 'S', 'ghostkit' ),
                                    value: 'sm',
                                },
                                {
                                    label: __( 'M', 'ghostkit' ),
                                    value: 'md',
                                },
                                {
                                    label: __( 'L', 'ghostkit' ),
                                    value: 'lg',
                                },
                                {
                                    label: __( 'Custom', 'ghostkit' ),
                                    value: 'custom',
                                },
                            ].map( ( val ) => {
                                const selected = gap === val.value;

                                return (
                                    <Button
                                        isSmall
                                        isPrimary={ selected }
                                        isPressed={ selected }
                                        onClick={ () => {
                                            const result = {
                                                gap: val.value,
                                            };

                                            // Add current predefined gap to custom value.
                                            if (
                                                'custom' === val.value
                                                && 'custom' !== gap
                                                && 'undefined' === typeof gapCustom
                                                && 'undefined' !== typeof GAP_VALUES[ gap ]
                                            ) {
                                                result.gapCustom = GAP_VALUES[ gap ];
                                            }

                                            onChange( result );
                                        } }
                                        key={ `gap_${ val.label }` }
                                    >
                                        { val.label }
                                    </Button>
                                );
                            } )
                        }
                    </ButtonGroup>
                </div>
                { 'custom' === gap ? (
                    <Fragment>
                        <p />
                        <RangeControl
                            value={ gapCustom }
                            onChange={ ( value ) => onChange( { gapCustom: value } ) }
                            min={ 0 }
                        />
                    </Fragment>
                ) : '' }
            </BaseControl>
        );
    }
}
