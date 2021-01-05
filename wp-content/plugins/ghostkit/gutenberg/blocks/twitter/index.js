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
    title: __( 'Twitter', 'ghostkit' ),
    description: __( 'Show Twitter feed and user data.', 'ghostkit' ),
    icon: getIcon( 'block-twitter', true ),
    keywords: [
        __( 'twitter', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/twitter/',
        supports: {
            styles: true,
            frame: true,
            spacings: true,
            display: true,
            customCSS: true,
        },
    },
    edit,
    save,
};
