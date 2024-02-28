/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import getSlugs from './getSlugs'

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({attributes: {tabs}}) {
  const slugs = getSlugs(tabs)
  return (
    <div { ...useBlockProps.save() }>
      <div className='wp-block-unicamp-unicamp-blocks-hashtabs__tabs-container'>
        <ol className='wp-block-unicamp-unicamp-blocks-hashtabs__tabs alignfull' >
        {tabs.map((tab, i) =>
          <li className='wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab' key={i} data-slug={slugs[i]} tabIndex={0} role='button'>
            <RichText.Content
              tagName='span'
              value={tab.title}
            />
          </li>)}
        </ol>
      </div>
      <InnerBlocks.Content />
    </div>
  );
}
