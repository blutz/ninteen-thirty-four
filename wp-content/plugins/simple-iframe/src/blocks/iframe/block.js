
import './style.scss';
import './editor.scss';
import Inspector from './inspector';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Placeholder } = wp.components;
const { registerBlockType } = wp.blocks;


registerBlockType( 'unapersona/simple-iframe', {

	title: __( 'Simple Iframe', 'simple-iframe' ),
	description: __('Easily insert iframes into the block editor.', 'simple-iframe'),
	keywords: [ __( 'iframe' ), __( 'external' )],
	category: 'embed',
	icon: 'admin-site-alt',

	supports: {
		anchor: true,
		className: false,
		customClassName: true,
		align: ['full'],
	},

	attributes: {
		iframeSrc: {
			type: 'string',
		},
		iframeWidth: {
			type: 'string',
		},
		iframeHeight: {
			type: 'string',
		},
		allowFullscreen: {
			type: 'boolean',
		},
		useLazyload: {
			type: 'boolean',
		},
		useImportant: {
			type: 'boolean',
		}
	},

	edit: function( props ) {

		const { attributes } = props;

		let customClassName = [attributes.className];
		if(attributes.align == 'full') customClassName.push('alignfull');

        const iframeStyle = {
            width: attributes.iframeWidth || '100%',
            maxWidth: attributes.iframeWidth || '100%',
            height: attributes.iframeHeight || '320px'
        };

        let allow = {};
        if(attributes.allowFullscreen) allow.allowFullscreen = true;

        const block = attributes.iframeSrc
			? <iframe
				id={ attributes.anchor }
				className={ customClassName.join(' ') }
				src={ attributes.iframeSrc }
				style={ iframeStyle }
				frameBorder="0"
				{ ...allow }
				></iframe>
			: <Placeholder
				icon="admin-site-alt"
				label={ __('Please fill the Iframe URL', 'simple-iframe') }
				/>;

        return (
			<Fragment>
				<Inspector { ...props } />
				{ block }
			</Fragment>
		);
	},

	save: function( props ) {

		const { attributes } = props;

		let customClassName = [attributes.className];
		if(attributes.align == 'full') customClassName.push('alignfull');

        const iframeStyle = {
            width: attributes.iframeWidth || '100%',
            maxWidth: attributes.iframeWidth || '100%',
            height: attributes.iframeHeight || '320px'
        };

        if(attributes.useImportant){
        	for(let i in iframeStyle){ iframeStyle[i] += ' !important'; }
		}

        let allow = {};
        if( attributes.allowFullscreen ) allow.allowFullscreen = true;

        return (
            <Fragment>
                <iframe
                    style={ iframeStyle }
					id={ attributes.anchor }
                    src={ attributes.iframeSrc }
					class={ customClassName.join(' ') }
					loading={ attributes.useLazyload ? 'lazy' : false}
                    frameBorder="0"
                    { ...allow }
                ></iframe>
            </Fragment>
        );
	},

} );
