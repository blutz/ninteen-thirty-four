/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./src/floating-toc/view.js ***!
  \**********************************/
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
const MARGIN = 100;
function setupBlock(container) {
  const anchors = container.querySelectorAll('a');
  const hashes = Array.from(anchors).map(a => a.hash.substring(1));
  anchors.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      window.history.pushState({}, '', a.hash);
      const el = document.getElementById(a.hash.substring(1));
      window.scrollTo({
        top: el.offsetTop - MARGIN,
        behavior: 'smooth'
      });
    });
  });
  function showSelected(index) {
    const i = index < 0 ? 0 : index;
    anchors.forEach(a => a.classList.remove('selected'));
    anchors[i].classList.add('selected');
  }
  window.addEventListener('scroll', () => {
    const positions = hashes.map(h => document.getElementById(h).offsetTop);
    const index = positions.findLastIndex(p => p <= window.scrollY + MARGIN);
    showSelected(index);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.wp-block-unicamp-floating-toc').forEach(setupBlock);
});
/******/ })()
;
//# sourceMappingURL=view.js.map