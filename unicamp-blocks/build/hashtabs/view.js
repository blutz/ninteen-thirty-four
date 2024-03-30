/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/hashtabs/view.js ***!
  \******************************/
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

const SELECTED_TAB_CLASSNAME = 'wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab--selected';

// Tabs can't be added/removed dynamically, so doing this once per pageload is fine
function setupBlock(container) {
  // Setup
  const slugs = [];
  container.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab').forEach(el => slugs.push(el.dataset.slug ? el.dataset.slug.toLowerCase().trim() : ''));
  if (!slugs.length) {
    return;
  }
  const tabContainers = container.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtab');
  const tabs = container.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtabs__tabs__tab');
  const tabsContainer = container.querySelector('.wp-block-unicamp-unicamp-blocks-hashtabs__tabs');

  // Click events on tabs
  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (tab.dataset.slug) {
      window.location = `#${tab.dataset.slug}`;
    }
  }));
  function selectTab(tabId) {
    tabs.forEach(tab => tab.classList.remove(SELECTED_TAB_CLASSNAME));
    tabs[tabId].classList.add(SELECTED_TAB_CLASSNAME);
    tabContainers.forEach(el => el.style.display = 'none');
    tabContainers[tabId].style.display = 'block';
    history.replaceState({}, '', `#${slugs[tabId]}`);
    tabsContainer.scrollTo({
      left: tabs[tabId].offsetLeft + tabs[tabId].clientWidth / 2 - tabsContainer.clientWidth / 2,
      behavior: 'smooth'
    });
  }

  // Returns tab ID if we have a slug that matches the input hash, otherwise -1
  function getTabIdByHash(hashInput = '') {
    let hash = hashInput[0] === '#' ? hashInput.substring(1).toLowerCase() : hashInput;
    if (!hash.trim().length) {
      return -1;
    }
    return slugs.indexOf(hash);
  }
  const startingTab = getTabIdByHash(window.location.hash);
  if (startingTab >= 0) {
    selectTab(startingTab);
  } else {
    selectTab(0);
  }
  window.addEventListener("hashchange", () => {
    const newTab = getTabIdByHash(window.location.hash);
    if (newTab >= 0) {
      selectTab(newTab);
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.wp-block-unicamp-unicamp-blocks-hashtabs').forEach(setupBlock);
});
/******/ })()
;
//# sourceMappingURL=view.js.map