// TODO: Either fix this or delete it. Right now it's way too jumpy.
var $ = jQuery;
var steadyBackgrounds = []
$(document).ready(function() {
  $('[data-steady-background]').each(function(index, item) {
    steadyBackgrounds.push({
      el: $(item),
      offset: $(item).scrollTop()
    })
    $(item).css('background-position-y', 0)
  })
})

$(window).scroll(function() {
  var scrollOffset = window.scrollY
  steadyBackgrounds.forEach(function(item) {
    var itemTop = item.offset;
    item.el.css('background-position-y', scrollOffset - itemTop)
  })
});
