// License: GPLv2+

var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	ServerSideRender = wp.components.ServerSideRender,
	TextControl = wp.components.TextControl,
  TextareaControl = wp.components.TextareaControl,
  PanelBody = wp.components.PanelBody,
  __ = wp.i18n.__,
	InspectorControls = wp.editor.InspectorControls;

/*
 * Here's where we register the block in JavaScript.
 *
 */
registerBlockType( 'ai/ai-block', {
	title: 'Advanced iframe',
	icon: 'shortcode',
	category: 'widgets',
	description: __( 'Adds an advanced iframe. You can overwrite the default settings of the administration here.' ),
	edit: function( props ) {
		return [
			el( ServerSideRender, {
				block: 'ai/ai-block',
				attributes: props.attributes,
			} ),
			
			el( InspectorControls, {},
              el(PanelBody, {title: 'Settings', initialOpen: true},			
            el( TextControl, {
					label: 'Url',
					value: props.attributes.src,
					onChange: ( value ) => { props.setAttributes( { src: value } ); },
                    placeholder: 'Url of the iframe'
				} ),
        	el( TextControl, {
					label: 'Width',
					value: props.attributes.width,
					onChange: ( value ) => { props.setAttributes( { width: value } ); },
                    placeholder: 'Width e.g. 100% or 200'
				} ),
        	el( TextControl, {
					label: 'Height',
					value: props.attributes.height,
					onChange: ( value ) => { props.setAttributes( { height: value } ); },
                    placeholder: 'Height e.g. 200'
				} ),
        	el( TextareaControl, {
					label: 'Additional parameters',
					value: props.attributes.additional,
                    rows: 8,
					onChange: ( value ) => { props.setAttributes( { additional: value } ); },  
                    placeholder: 'Enter additional parameters in short code style. e.g. margin="0" onload_resize="true". Be aware that by default the settings from the administration are used.'
          
				} ) ),
         el(PanelBody, {title: 'Help', initialOpen: false},
               el('p', {},'For even more flexibilty please use the short code block directly. Please go to the administration of advanced iframe for a detailed documentation of each parameter. If a setting is set in the additional parameters and in the block directly the one from the block is used.  In the Gutenberg preview a small selection area is added to make it possible to select the block by clicking above the iframe preview.' )
         )
			),
		];
	},

	// We're going to be rendering in PHP, so save() can just return null.
	save: function() {
		return null;
	},
} );
