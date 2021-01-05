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

const { __ } = wp.i18n;

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Tabs', 'ghostkit' ),
    description: __( 'Separate content on the tabs with titles.', 'ghostkit' ),
    icon: getIcon( 'block-tabs', true ),
    keywords: [
        __( 'tabs', 'ghostkit' ),
        __( 'tab', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/tabs/',
        supports: {
            styles: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    styles: [
        {
            name: 'default',
            label: __( 'Tabs', 'ghostkit' ),
            isDefault: true,
        },
        {
            name: 'pills',
            label: __( 'Pills', 'ghostkit' ),
        },
    ],
    edit,
    save,
    transforms,
};
