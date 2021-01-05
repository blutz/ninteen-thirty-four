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
    title: __( 'Changelog', 'ghostkit' ),
    description: __( 'Show the changes log of your product.', 'ghostkit' ),
    icon: getIcon( 'block-changelog', true ),
    keywords: [
        __( 'changelog', 'ghostkit' ),
        __( 'log', 'ghostkit' ),
    ],
    ghostkit: {
        previewUrl: 'https://ghostkit.io/blocks/changelog/',
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
        attributes: {
            version: '1.0.0',
            date: '19 August 2077',
        },
        innerBlocks: [
            {
                name: 'core/list',
                attributes: {
                    values: [
                        <li key="list-item-1">
                            <span className="ghostkit-badge" style={ { backgroundColor: '#4ab866' } }>{ __( 'Added', 'ghostkit' ) }</span>
                            { __( 'Something', 'ghostkit' ) }
                        </li>,
                        <li key="list-item-2">
                            <span className="ghostkit-badge" style={ { backgroundColor: '#0366d6' } }>{ __( 'Fixed', 'ghostkit' ) }</span>
                            { __( 'Something', 'ghostkit' ) }
                        </li>,
                        <li key="list-item-3">
                            <span className="ghostkit-badge" style={ { backgroundColor: '#63656b' } }>{ __( 'Changed', 'ghostkit' ) }</span>
                            { __( 'Something', 'ghostkit' ) }
                        </li>,
                    ],
                },
            },
        ],
    },
    edit,
    save,
};
