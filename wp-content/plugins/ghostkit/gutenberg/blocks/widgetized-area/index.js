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
    title: __( 'Widgetized Area', 'ghostkit' ),
    description: __( 'Select registered sidebars and put it in any place.', 'ghostkit' ),
    icon: getIcon( 'block-widgetized-area', true ),
    keywords: [
        __( 'widget', 'ghostkit' ),
        __( 'sidebar', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/widgetized-area/',
    },
    edit,
    save,
};
