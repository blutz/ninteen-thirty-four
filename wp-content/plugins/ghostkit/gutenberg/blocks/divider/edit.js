/**
 * External dependencies
 */
import classnames from 'classnames/dedupe';

/**
 * Internal dependencies
 */
import ColorPicker from '../../components/color-picker';
import IconPicker from '../../components/icon-picker';
import ApplyFilters from '../../components/apply-filters';

/**
 * WordPress dependencies
 */
const {
    applyFilters,
} = wp.hooks;

const { __ } = wp.i18n;

const { Component, Fragment } = wp.element;

const {
    PanelBody,
    RangeControl,
    SelectControl,
    Toolbar,
    DropdownMenu,
    ColorIndicator,
    TabPanel,
} = wp.components;

const {
    InspectorControls,
    BlockControls,
} = wp.blockEditor;

/**
 * Block Edit Class.
 */
class BlockEdit extends Component {
    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;

        let { className = '' } = this.props;

        const {
            type,
            size,
            icon,
            iconSize,
            color,
            iconColor,
            hoverColor,
            hoverIconColor,
        } = attributes;

        className = classnames( 'ghostkit-divider', `ghostkit-divider-type-${ type }`, className );

        if ( icon ) {
            className = classnames( className, 'ghostkit-divider-with-icon' );
        }

        className = applyFilters( 'ghostkit.editor.className', className, this.props );

        return (
            <Fragment>
                <BlockControls>
                    <Toolbar>
                        <DropdownMenu
                            icon="minus"
                            label={ __( 'Type', 'ghostkit' ) }
                            controls={ [
                                {
                                    title: __( 'Line', 'ghostkit' ),
                                    onClick: () => setAttributes( { type: 'solid' } ),
                                },
                                {
                                    title: __( 'Dashed', 'ghostkit' ),
                                    onClick: () => setAttributes( { type: 'dashed' } ),
                                },
                                {
                                    title: __( 'Dotted', 'ghostkit' ),
                                    onClick: () => setAttributes( { type: 'dotted' } ),
                                },
                                {
                                    title: __( 'Double', 'ghostkit' ),
                                    onClick: () => setAttributes( { type: 'double' } ),
                                },
                            ] }
                        />
                    </Toolbar>
                </BlockControls>
                <InspectorControls>
                    <PanelBody>
                        <SelectControl
                            label={ __( 'Type', 'ghostkit' ) }
                            value={ type }
                            options={ [
                                {
                                    value: 'solid',
                                    label: __( 'Line', 'ghostkit' ),
                                }, {
                                    value: 'dashed',
                                    label: __( 'Dashed', 'ghostkit' ),
                                }, {
                                    value: 'dotted',
                                    label: __( 'Dotted', 'ghostkit' ),
                                }, {
                                    value: 'double',
                                    label: __( 'Double', 'ghostkit' ),
                                },
                            ] }
                            onChange={ ( value ) => setAttributes( { type: value } ) }
                        />
                        <RangeControl
                            label={ __( 'Size', 'ghostkit' ) }
                            value={ size }
                            onChange={ ( value ) => setAttributes( { size: value } ) }
                            min={ 1 }
                            max={ 7 }
                            beforeIcon="editor-textcolor"
                            afterIcon="editor-textcolor"
                        />
                    </PanelBody>
                    <PanelBody>
                        <IconPicker
                            label={ __( 'Icon', 'ghostkit' ) }
                            value={ icon }
                            onChange={ ( value ) => setAttributes( { icon: value } ) }
                        />
                        { icon ? (
                            <RangeControl
                                label={ __( 'Icon Size', 'ghostkit' ) }
                                value={ iconSize }
                                onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                                min={ 10 }
                                max={ 100 }
                                beforeIcon="editor-textcolor"
                                afterIcon="editor-textcolor"
                            />
                        ) : '' }
                    </PanelBody>
                    <PanelBody
                        title={ (
                            <Fragment>
                                { __( 'Colors', 'ghostkit' ) }
                                <ColorIndicator colorValue={ color } />
                                { icon ? (
                                    <ColorIndicator colorValue={ iconColor } />
                                ) : '' }
                            </Fragment>
                        ) }
                        initialOpen={ false }
                    >
                        <TabPanel
                            className="ghostkit-control-tabs ghostkit-control-tabs-wide"
                            tabs={ [
                                {
                                    name: 'normal',
                                    title: __( 'Normal', 'ghostkit' ),
                                    className: 'ghostkit-control-tabs-tab',
                                },
                                {
                                    name: 'hover',
                                    title: __( 'Hover', 'ghostkit' ),
                                    className: 'ghostkit-control-tabs-tab',
                                },
                            ] }
                        >
                            {
                                ( tabData ) => {
                                    const isHover = 'hover' === tabData.name;
                                    return (
                                        <Fragment>
                                            <ApplyFilters name="ghostkit.editor.controls" attribute={ isHover ? 'hoverColor' : 'color' } props={ this.props }>
                                                <ColorPicker
                                                    label={ __( 'Divider', 'ghostkit' ) }
                                                    value={ isHover ? hoverColor : color }
                                                    onChange={ ( val ) => setAttributes( isHover ? { hoverColor: val } : { color: val } ) }
                                                    alpha
                                                />
                                            </ApplyFilters>
                                            { icon ? (
                                                <ApplyFilters name="ghostkit.editor.controls" attribute={ isHover ? 'hoverIconColor' : 'iconColor' } props={ this.props }>
                                                    <ColorPicker
                                                        label={ __( 'Icon', 'ghostkit' ) }
                                                        value={ isHover ? hoverIconColor : iconColor }
                                                        onChange={ ( val ) => setAttributes( isHover ? { hoverIconColor: val } : { iconColor: val } ) }
                                                        alpha
                                                    />
                                                </ApplyFilters>
                                            ) : '' }
                                        </Fragment>
                                    );
                                }
                            }
                        </TabPanel>
                    </PanelBody>
                </InspectorControls>
                <div className={ className }>
                    { icon ? (
                        <div className="ghostkit-divider-icon">
                            <IconPicker.Dropdown
                                onChange={ ( value ) => setAttributes( { icon: value } ) }
                                value={ icon }
                                renderToggle={ ( { onToggle } ) => (
                                    <IconPicker.Preview
                                        onClick={ onToggle }
                                        name={ icon }
                                    />
                                ) }
                            />
                        </div>
                    ) : '' }
                </div>
            </Fragment>
        );
    }
}

export default BlockEdit;
