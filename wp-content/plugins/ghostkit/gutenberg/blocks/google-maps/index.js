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
import deprecated from './deprecated';

const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Google Maps', 'ghostkit' ),
    description: __( 'Show maps with custom styles, markers and settings.', 'ghostkit' ),
    icon: getIcon( 'block-google-maps', true ),
    keywords: [
        __( 'maps', 'ghostkit' ),
        __( 'google', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/google-maps/',
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
    deprecated,
};
