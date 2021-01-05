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
import transforms from './transforms';
import deprecated from './deprecated';

const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Testimonial', 'ghostkit' ),
    description: __( 'Show how your users love your products and what saying.', 'ghostkit' ),
    icon: getIcon( 'block-testimonial', true ),
    keywords: [
        __( 'testimonial', 'ghostkit' ),
        __( 'blockquote', 'ghostkit' ),
        __( 'quote', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/testimonial/',
        supports: {
            styles: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    example: {
        attributes: {
            photo: 1,
            photoTag: '<img src="https://s.w.org/images/core/5.3/Biologia_Centrali-Americana_-_Cantorchilus_semibadius_1902.jpg">',
        },
        innerBlocks: [
            {
                name: 'core/paragraph',
                attributes: {
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et eros eu felis.',
                },
            },
        ],
    },
    edit,
    save,
    transforms,
    deprecated,
};
