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
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

const BLOCK_TEMPLATE = [
  ['unicamp/unicamp-blocks-hashtab-title-container', {}],
  ['unicamp/unicamp-blocks-hashtab-content', {}],
];

function dupes(arr) {
  const dupes = arr.filter((el, i) => arr.indexOf(el) !== i)
  if(dupes.length) { return dupes }
}

// MODIFIES src to get rid of dupes. This may take multiple passes.
function dedupe(dupes, src) {
  // O(n^2), but there should never be more than 5-10 tabs
  for (const dupe of dupes) {
    let counter = 1
    for(let i = src.indexOf(dupe); i >= 0; i = src.indexOf(dupe), counter++) {
      src[i] = src[i] + "-" + counter
    }
  }
}

// TODO: Move to a separate file
import slugify from 'slugify'
function getSlugs(tabs) {
  const slugs = tabs.map(tab => {
    const text = new DOMParser()
      .parseFromString(tab.title, "text/html")
      .documentElement.textContent;
    return slugify(text, {
      lower: true,
      strict: true,
      replacement: '',
      remove: /[\W]/,
    })
  })
  // Realistically since we strip "-", this will only ever run once.  But This
  // while loop is here just in case that changes, to make sure we always have
  // unique slugs.
  while(dupes(slugs)) {
    dedupe(dupes(slugs), slugs)
  }
  return slugs
}


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes: { tabs }, setAttributes}) {
  function handleTabTitleChange(newTitle, i) {
    const newTabs = [...tabs]
    newTabs[i] = {...tabs[i]}
    newTabs[i].title = newTitle
    setAttributes({
      tabs: newTabs,
    })
  }
  const slugs = getSlugs(tabs)
  // TODO: Handle no tabs
  return (
    <div { ...useBlockProps() }>
      <ol>
        {tabs.map((tab, i) =>
          <RichText
            tagName='li'
            value={tab.title}
            onChange={val => handleTabTitleChange(val, i)}
            multiline={false}
            key={i}
          />
        )}
      </ol>
    </div>
  );
}
      //{JSON.stringify(attributes)}
      //<InnerBlocks
        //template={BLOCK_TEMPLATE}
        //templateLock='all'
      ///>
