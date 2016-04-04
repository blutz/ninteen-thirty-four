var $ = jQuery

var COLLAPSED_CLASS = 'expand--collapsed'
var BUTTON_CLASS = 'expand__button'
var CONTENT_CLASS = 'expand__content'
var ANIMATION_SPEED = 250

var ExpandWidget = function(el) {
  this.el = $(el)
  this.toggleButton = this.el.find('.'+BUTTON_CLASS)
  var contentContainerId = this.el.data('expand')
  this.contentContainer = $('#'+contentContainerId)
  if (!this.contentContainer.length)
    this.contentContainer = this.el.find('.'+CONTENT_CLASS)
  // Make sure the DOM is set up correctly to start
  this.isVisible() ? this.show() : this.hide()
  this.setHandlers()
}
ExpandWidget.prototype.setHandlers = function() {
  this.toggleButton.click(this.toggle.bind(this))
}
ExpandWidget.prototype.toggle = function(e) {
  e.preventDefault()
  this.isVisible() ? this.hide() : this.show()
}
ExpandWidget.prototype.isVisible = function() {
  return !this.el.hasClass(COLLAPSED_CLASS)
}
ExpandWidget.prototype.hide = function() {
  this.el.addClass(COLLAPSED_CLASS)
  this.contentContainer.slideUp(ANIMATION_SPEED)
}
ExpandWidget.prototype.show = function() {
  this.el.removeClass(COLLAPSED_CLASS)
  this.contentContainer.slideDown(ANIMATION_SPEED)
}

$('.expand').each(function(index, el) {
  window.a = new ExpandWidget(el)
})
