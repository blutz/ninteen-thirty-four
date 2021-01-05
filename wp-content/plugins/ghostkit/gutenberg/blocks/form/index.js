/**
 * WordPress dependencies
 */
/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';

import metadata from './block.json';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Form', 'ghostkit' ),
    description: __( 'Add contact form to your page with reCaptcha.', 'ghostkit' ),
    icon: getIcon( 'block-form', true ),
    keywords: [
        __( 'form', 'ghostkit' ),
        __( 'contact', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/contact-form/',
        supports: {
            styles: true,
            frame: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    example: {
        innerBlocks: [
            {
                name: 'ghostkit/form-field-email',
                attributes: {
                    required: true,
                },
            }, {
                name: 'ghostkit/form-field-text',
                attributes: {
                    required: true,
                    nameFields: 'first-last',
                    description: __( 'First', 'ghostkit' ),
                    descriptionLast: __( 'Last', 'ghostkit' ),
                },
            }, {
                name: 'ghostkit/form-field-textarea',
                attributes: {
                    label: __( 'Message', 'ghostkit' ),
                    placeholder: __( 'Write your message here...', 'ghostkit' ),
                },
            }, {
                name: 'ghostkit/form-submit-button',
            },
        ],
    },
    edit,
    save,
};
