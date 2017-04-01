var $ = jQuery

function BlockedAnimation(el, numBlocks, deadZone) {
  this.ANIMATION_CLASS_PREFIX = 'animation-block-'
  this.el = $(el)
  this.numBlocks = numBlocks
  this.elHeight = el.innerHeight()
  this.elOffsetTop = el.offset().top
  this.deadZone = deadZone
  this.sceneHeight = this.elHeight - this.deadZone
  this.setBlockOffsets()
  $(window).scroll(this.scrollHandler.bind(this))
}
BlockedAnimation.prototype.setBlockOffsets = function() {
  this.blockOffsets = []
  this.blockHeight = this.sceneHeight / this.numBlocks
  for(var i = 0; i < this.numBlocks; i++) {
    this.blockOffsets.push((i+1)*this.blockHeight)
  }
}
BlockedAnimation.prototype.scrollHandler = function() {
  this.setBlock(this.getCurrentBlock())
}
BlockedAnimation.prototype.getCurrentBlock = function() {
  var currentOffset = window.scrollY - this.elOffsetTop
  var ret
  for(var i = 0; i < this.blockOffsets.length; i++) {
    if (currentOffset < this.blockOffsets[i]) {
      ret = i+1
      break
    }
  }
  ret = ret || this.blockOffsets.length
  return ret
}
BlockedAnimation.prototype.setBlock = function(blockNum) {
  var newClass = this.ANIMATION_CLASS_PREFIX+blockNum
  if (this.el.hasClass(newClass)) { return }
  this.removeAnimationClasses()
  this.el.addClass(newClass)
}
BlockedAnimation.prototype.removeAnimationClasses = function() {
  for(var i = 1; i < this.numBlocks+1; i++) {
    this.el.removeClass(this.ANIMATION_CLASS_PREFIX+i)
  }
}


$('[data-blocked-animation]').each(function(index, el) {
  var $el = $(el)
  var blocks = parseInt($el.data('blocked-animation-blocks'))
  var deadZone = parseInt($el.data('blocked-animation-dead-zone')) || 0
  new BlockedAnimation($el, blocks, deadZone)
})
