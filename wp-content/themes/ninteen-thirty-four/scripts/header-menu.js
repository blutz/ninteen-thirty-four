var $ = jQuery

var CLOSED_CLASS = 'header__menu-container--closed'
var MENU_CLASS = 'header__items'
var EXPAND_CLASS = 'header__menu-container__expand'
var TIME_OPEN = 2000
var SCROLL_BUFFER = 500

var HeaderMenu = function(el) {
  this.containerEl = $(el)
  this.header = $('header')
  this.menuEl = this.containerEl.find('.'+MENU_CLASS)
  this.expandEl = this.containerEl.find('.'+EXPAND_CLASS)

  this.open = true
  this.hovered = false
  this.scrolledAway = false
  this.timer = undefined

  this.setHandlers()

  this.draw()
}
HeaderMenu.prototype.setHandlers = function() {
  $(document).scroll(this.handleScroll.bind(this))
  this.header.hover(this.handleHoverIn.bind(this),
                    this.handleHoverOut.bind(this))
}
HeaderMenu.prototype.handleScroll = function() {
  if(window.scrollY > SCROLL_BUFFER)
    this.scrolledAway = true
  else
    this.scrolledAway = false
  this.checkAndDrawMenu()
}
HeaderMenu.prototype.handleHoverIn = function() {
  if(this.timer) window.clearTimeout(this.timer)
  this.hovered = true
  this.checkAndDrawMenu()
}
HeaderMenu.prototype.handleHoverOut = function() {
  this.timer = window.setTimeout(this.checkAndDrawMenu.bind(this), TIME_OPEN)
  this.hovered = false
}
// Timer is the only thing that closes
HeaderMenu.prototype.checkAndDrawMenu = function() {
  this.timer = undefined
  if(this.scrolledAway && !this.hovered) {
    this.open = false
  } else {
    this.open = true
  }
  this.draw()
}
HeaderMenu.prototype.draw = function() {
  if(this.open && this.containerEl.hasClass(CLOSED_CLASS)) {
    this.containerEl.removeClass(CLOSED_CLASS)
  } else if (!this.open && !this.containerEl.hasClass(CLOSED_CLASS)) {
    this.containerEl.addClass(CLOSED_CLASS)
  }
}

var headerMenuEl = document.getElementById('header-menu')
new HeaderMenu(headerMenuEl)
