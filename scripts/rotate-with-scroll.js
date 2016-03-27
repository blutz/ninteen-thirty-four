var $ = jQuery

$('[data-rotate-with-scroll]').each(function(index, el) {
  $(window).scroll(function() {
    var rotateAmount = window.scrollY/2
    $(el).css({'transform': 'rotate('+rotateAmount+'deg)'})
  })
})
