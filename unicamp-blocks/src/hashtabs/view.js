/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

// Tabs canNOT be added/removed dynamically, so doing this once per pageload is fine
function setupBlock(container) {
  const slugs = []
  container.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab')
    .forEach(el => slugs.push(el.dataset.slug))
  const tabs = container.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtab')

  console.log(slugs)
  console.log(tabs)
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtabs').forEach(setupBlock)
})
