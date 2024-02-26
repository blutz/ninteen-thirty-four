/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, store } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

import { useSelect } from '@wordpress/data'

const BLOCK_TEMPLATE = [
  ['unicamp/unicamp-blocks-hashtab-title-container', {}],
  ['unicamp/unicamp-blocks-hashtab-content', {}],
];


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, clientId}) {
  const innerBlocks = useSelect(
    (select) => select(store).getBlock(clientId).innerBlocks,
  );
  console.log(innerBlocks)
  return (
    <div { ...useBlockProps() }>
      {JSON.stringify(attributes)}
      <InnerBlocks
        template={BLOCK_TEMPLATE}
        templateLock='all'
      />
    </div>
  );
}
