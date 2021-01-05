/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, TextControl, ToggleControl} = wp.components;

/**
 * Inspector controls
 */
export default class Inspector extends Component {

    render() {
        const { attributes, setAttributes } = this.props;

        return (
            <InspectorControls key="inspector">
                <PanelBody title={ __( 'Settings', 'simple-iframe' ) } >
                    <TextControl
                        label={  __('Iframe URL', 'simple-iframe') }
                        value={ attributes.iframeSrc }
                        onChange={ ( value ) => { setAttributes( {iframeSrc: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Allow fullscreen', 'simple-iframe') }
                        checked={ attributes.allowFullscreen }
                        onChange={ ( value ) => { setAttributes( {allowFullscreen: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Add lazyload attribute', 'simple-iframe') }
                        checked={ attributes.useLazyload }
                        onChange={ ( value ) => { setAttributes( {useLazyload: value } ) } }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Style options', 'simple-iframe' ) } >
                    <TextControl
                        label={ __('Width', 'simple-iframe') }
                        value={ attributes.iframeWidth }
                        onChange={ ( value ) => { setAttributes( {iframeWidth: value } ) } }
                    />
                    <TextControl
                        label={ __('Height', 'simple-iframe') }
                        value={ attributes.iframeHeight }
                        onChange={ ( value ) => { setAttributes( {iframeHeight: value } ) } }
                    />
                    <ToggleControl
                        label={ __('Use !important', 'simple-iframe') }
                        checked={ attributes.useImportant }
                        onChange={ ( value ) => { setAttributes( {useImportant: value } ) } }
                    />
                </PanelBody>
            </InspectorControls>
        );
    }

}
