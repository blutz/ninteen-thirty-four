import { useState, useMemo, useEffect } from 'react'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText, InspectorControls, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components'
import { useDispatch, useSelect } from '@wordpress/data'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

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

function TabControl({tab, slug}) {
  return <div>
    {tab.title}
    <br />
    <small>#{slug}</small>
  </div>
}


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({clientId, attributes: { tabs }, setAttributes}) {
  const [selectedTab, setSelectedTab] = useState(0)
  const slugs = useMemo(() => getSlugs(tabs), [tabs])
  const innerBlocksTemplate = tabs.map(() => ['unicamp/unicamp-blocks-hashtab', {}])
  // TODO: dispatch the replaceInnerBlocks event to reorder blocks
  // https://developer.wordpress.org/block-editor/reference-guides/data/data-core-block-editor/#replaceinnerblocks
  // https://wordpress.stackexchange.com/questions/344957/how-can-you-reset-innerblock-content-to-base-template
  const { updateBlockAttributes } = useDispatch("core/block-editor")
  const { innerBlocks } = useSelect(select => ({
      innerBlocks: select("core/block-editor").getBlocks(clientId)
  }))
  const blockIds = innerBlocks.map(block => block.clientId)
  const selectedId = blockIds[selectedTab]
  useEffect(() => {
    updateBlockAttributes(blockIds, {hidden: true}, false)
    updateBlockAttributes([selectedId], {hidden: false}, false)
  }, [selectedTab])

  function handleTabTitleChange(newTitle, i) {
    const newTabs = [...tabs]
    newTabs[i] = {...tabs[i]}
    newTabs[i].title = newTitle
    setAttributes({
      tabs: newTabs,
    })
  }
  function handleNewTab() {
    setAttributes({
      tabs: [...tabs, {title: `Tab ${tabs.length+1}`}]
    })
  }

  // TODO: Handle no tabs
  return (
    <>
      <InspectorControls>
        <PanelBody title='Tabs'>
          {tabs.map((tab, i) => <TabControl tab={tab} slug={slugs[i]} key={i} />)}
          <div>
            <Button variant='link' onClick={handleNewTab}>Add tab</Button>
          </div>
        </PanelBody>
      </InspectorControls>
      <div { ...useBlockProps() }>
        <h1>{clientId}</h1>
        <ol>
          {tabs.map((tab, i) =>
            <RichText
              tagName='li'
              key={i}
              value={tab.title}
              onChange={val => handleTabTitleChange(val, i)}
              onFocus={() => setSelectedTab(i)}
              multiline={false}
            />
          )}
        </ol>
        <hr />
        <InnerBlocks
          template={innerBlocksTemplate}
          templateLock='all'
        />
      </div>
    </>
  );
}
