import slugify from 'slugify'

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

export default getSlugs
