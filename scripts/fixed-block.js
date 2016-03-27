var $ = jQuery

$('[data-fixed-block]').each(function(index, el) {
  var $el = $(el)
  var $parent = $el.parent()
  $(window).scroll(function() {
    var margin = window.scrollY - $parent.offset().top
    if (margin < 0) margin = 0
    $el.css({'margin-top': margin})
  })
})
