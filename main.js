!function(){"use strict";function t(t,e,i){this.ANIMATION_CLASS_PREFIX="animation-block-",this.el=s(t),this.numBlocks=e,this.elHeight=t.innerHeight(),this.elOffsetTop=t.offset().top,this.deadZone=i,this.sceneHeight=this.elHeight-this.deadZone,this.setBlockOffsets(),s(window).scroll(this.scrollHandler.bind(this))}var s=jQuery;t.prototype.setBlockOffsets=function(){this.blockOffsets=[],this.blockHeight=this.sceneHeight/this.numBlocks;for(var t=0;t<this.numBlocks;t++)this.blockOffsets.push((t+1)*this.blockHeight)},t.prototype.scrollHandler=function(){this.setBlock(this.getCurrentBlock())},t.prototype.getCurrentBlock=function(){for(var t,s=window.scrollY-this.elOffsetTop,e=0;e<this.blockOffsets.length;e++)if(s<this.blockOffsets[e]){t=e+1;break}return t=t||this.blockOffsets.length},t.prototype.setBlock=function(t){var s=this.ANIMATION_CLASS_PREFIX+t;this.el.hasClass(s)||(this.removeAnimationClasses(),this.el.addClass(s))},t.prototype.removeAnimationClasses=function(){for(var t=1;t<this.numBlocks+1;t++)this.el.removeClass(this.ANIMATION_CLASS_PREFIX+t)},s("[data-blocked-animation]").each(function(e,i){var o=s(i),n=parseInt(o.data("blocked-animation-blocks")),l=parseInt(o.data("blocked-animation-dead-zone"))||0;new t(o,n,l)})}();

!function(){"use strict";var t=jQuery,n="expand--collapsed",e="expand__button",i="expand__content",s=250,o=function(n){this.el=t(n),this.toggleButton=this.el.find("."+e);var s=this.el.data("expand");this.contentContainer=t("#"+s),this.contentContainer.length||(this.contentContainer=this.el.find("."+i)),this.isVisible()?this.show():this.hide(),this.setHandlers()};o.prototype.setHandlers=function(){this.toggleButton.click(this.toggle.bind(this))},o.prototype.toggle=function(t){t.preventDefault(),this.isVisible()?this.hide():this.show()},o.prototype.isVisible=function(){return!this.el.hasClass(n)},o.prototype.hide=function(){this.el.addClass(n),this.contentContainer.slideUp(s)},o.prototype.show=function(){this.el.removeClass(n),this.contentContainer.slideDown(s)},t(".expand").each(function(t,n){window.a=new o(n)})}();

!function(){"use strict";var o=jQuery;o("[data-fixed-block]").each(function(n,t){var c=o(t),r=c.parent();o(window).scroll(function(){var o=window.scrollY-r.offset().top;0>o&&(o=0),c.css({"margin-top":o})})})}();

!function(){"use strict";var e=jQuery;e(".hover-image").each(function(o,t){var i=e(t).find(".hover-image__text__blurb");e(t).hover(function(){i.stop().show(250)},function(){i.stop().hide(250)})})}();

!function(){"use strict";var t=jQuery;t("[data-rotate-with-scroll]").each(function(o,r){t(window).scroll(function(){var o=window.scrollY/2;t(r).css({transform:"rotate("+o+"deg)"})})})}();

!function(){"use strict";jQuery(document).foundation()}();

!function(){"use strict";var o=jQuery,n=[];o(document).ready(function(){o("[data-steady-background]").each(function(c,s){n.push({el:o(s),offset:o(s).scrollTop()}),o(s).css("background-position-y",0)})}),o(window).scroll(function(){var o=window.scrollY;n.forEach(function(n){var c=n.offset;n.el.css("background-position-y",o-c)})})}();


//# sourceMappingURL=/wp-content/themes/ninteen-thirty-four/main.js.map
