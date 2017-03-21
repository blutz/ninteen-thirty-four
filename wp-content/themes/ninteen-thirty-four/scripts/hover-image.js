var $ = jQuery

$('.hover-image').each(function(index, el) {
  var blurb = $(el).find('.hover-image__text__blurb')
  $(el).hover(function() {
    blurb.stop().show(250)
  }, function() {
    blurb.stop().hide(250)
  })
})
