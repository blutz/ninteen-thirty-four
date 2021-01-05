/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';

import metadata from './block.json';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'GIF', 'ghostkit' ),
    description: __( 'Search for and insert an animated image.', 'ghostkit' ),
    icon: getIcon( 'block-gif', true ),
    keywords: [
        __( 'animated', 'ghostkit' ),
        __( 'giphy', 'ghostkit' ),
        __( 'image', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/gif/',
        supports: {
            styles: true,
            frame: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    edit,
    save,
};
