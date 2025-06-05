import { useEffect } from 'react'
import { useSelect } from '@wordpress/data'
import { Icon } from '@wordpress/components'
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
function getFlattenedBlocks(blocks) {
  if(blocks.length === 0) { return [] }
  let innerBlocks = []
  blocks.forEach(b => innerBlocks = [...innerBlocks, ...b.innerBlocks])
  return [...blocks, ...getFlattenedBlocks(innerBlocks)]
}
export default function Edit({attributes: {headings=[]}, setAttributes}) {
  const { blocks } = useSelect(select => ({
      blocks: select("core/block-editor").getBlocks()
  }))
  useEffect(() => {
    debugger
    const flattenedBlocks = getFlattenedBlocks(blocks)
    const h2s = flattenedBlocks.filter(b =>
      b.name === 'core/heading' && b.attributes?.level === 2
    ).map(b => ({
      anchor: b.attributes.anchor,
      content: b.attributes.content.text,
    }))
    if(JSON.stringify(headings) !== JSON.stringify(h2s)) {
      setAttributes({headings: h2s})
    }
  }, [blocks])


  return (
    <div { ...useBlockProps() }>
      <span className='wp-block-unicamp-floating-toc__title'>Contents</span>
      <ol className='wp-block-unicamp-floating-toc__ol'>
        {headings.map(h =>
          <li key={h.anchor}>{h.content}</li>
        )}
      </ol>
    </div>
  );
}
