!function(){"use strict";function e(e){e=e||{};var o={},r=e.code||a.code.val();r=r.toLowerCase(),o.code=r,n[r]?(o.activePage="details",o.sessionDetails=s[n[r]],i.bbq.pushState({"application-code":r})):(o.activePage="intro",o.codeError=!0),t(o)}function o(){var o={},r=i.bbq.getState();r["application-code"]?e({code:r["application-code"]}):(o.activePage="intro",t(o))}function t(e){if(a.intro.hide(),a.details.hide(),"intro"==e.activePage)a.intro.show(),a.code.val(e.code),e.codeError?(a.code.addClass("is-invalid-input"),a.codeFormError.show()):(a.code.removeClass("is-invalid-input"),a.codeFormError.hide());else if("details"==e.activePage){if(a.details.find("h2").html(e.sessionDetails.title),a.details.find("h4").html(e.sessionDetails.subtitle),e.sessionDetails.googleFormId)var o="https://docs.google.com/forms/d/"+e.sessionDetails.googleFormId+"/viewform?embedded=true";else if(e.sessionDetails.airtableFormId)var o="https://airtable.com/embed/"+e.sessionDetails.airtableFormId+"?backgroundColor=cyan";e.sessionDetails.formOption&&(o=o+"&"+e.sessionDetails.formOption),a.form[0].src=o,a.details.show()}}var i=jQuery,r=i('meta[name="unicamp-page"]').attr("value");if("camper-application"==r){var s={session3:{title:"Session 3: Community Building/Activism for African American Youth",subtitle:"The Village Nation",googleFormId:"1y_SKQ5A592-1PEa8f61GXdjEXj8CG_RU9BB74yyNqr4"},"session6-chla":{title:"Session 6: Healthy Lifestyles",subtitle:"Children's Hospital Los Angeles",airtableFormId:"shr18CTJZ0sq4S3c2",formOption:"entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1424045282&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437&entry.1451578299=From+an+event+at+CHLA+or+a+CHLA-related+program"},"session6-open":{title:"Session 6: Healthy Lifestyles",subtitle:"Children's Hospital Los Angeles",airtableFormId:"shrYj8OLuJrenzwIS",formOption:"entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1424045282&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437&entry.1451578299=From+the+UniCamp+website,+and+emailed+for+an+access+code"},session5:{title:"Session 5: Leadership Development for Urban Youth",subtitle:"Determined To Succeed, HYPE LA, and Dana Middle School",googleFormId:"1AYFH-5TWtPI3UQKPMFdrde78M2PooXKvLCzZjkYgRXc",formOption:"entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1811315605=Session+5+(Leadership+Development+for+Urban+Youth+/+July+24+-+July+31)&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437"},session7:{title:"Session 7: Empowerment Through Art",googleFormId:"1AYFH-5TWtPI3UQKPMFdrde78M2PooXKvLCzZjkYgRXc",formOption:"entry.608555151&entry.1412406208&entry.1180524671&entry.1626767169&entry.1811315605=Session+7+(Empowerment+Through+Art+/+August+6+-+August+12)&entry.1704779128&entry.901870482&entry.925488213&entry.315465932&entry.1296946437"},ocp:{title:"Older Camper Programs",subtitle:"CLIMB, UniCorps, and WALL",googleFormId:"1_sNmfTQHHfp9ZIDFgjbjD2m0tH66TG5QcLtjUc_P5wo"}},n={chla16:"session6-chla",healthy2016:"session6-open",health16:"session6-open",session5:"session5",session7:"session7",villagesesh3:"session3",ocp:"ocp"},a={};a.intro=i("#applicationIntro"),a.details=i("#applicationDetails"),a.code=i("#applicationCode"),a.codeForm=i("#applicationCodeForm"),a.codeFormError=i("#applicationCodeFormError"),a.form=i("#applicationForm"),a.codeForm.submit(function(o){o.preventDefault(),e()}),i(window).bind("hashchange",o),i(window).trigger("hashchange")}}();

!function(){"use strict";function t(t,e,i){this.ANIMATION_CLASS_PREFIX="animation-block-",this.el=s(t),this.numBlocks=e,this.elHeight=t.innerHeight(),this.elOffsetTop=t.offset().top,this.deadZone=i,this.sceneHeight=this.elHeight-this.deadZone,this.setBlockOffsets(),s(window).scroll(this.scrollHandler.bind(this))}var s=jQuery;t.prototype.setBlockOffsets=function(){this.blockOffsets=[],this.blockHeight=this.sceneHeight/this.numBlocks;for(var t=0;t<this.numBlocks;t++)this.blockOffsets.push((t+1)*this.blockHeight)},t.prototype.scrollHandler=function(){this.setBlock(this.getCurrentBlock())},t.prototype.getCurrentBlock=function(){for(var t,s=window.scrollY-this.elOffsetTop,e=0;e<this.blockOffsets.length;e++)if(s<this.blockOffsets[e]){t=e+1;break}return t=t||this.blockOffsets.length},t.prototype.setBlock=function(t){var s=this.ANIMATION_CLASS_PREFIX+t;this.el.hasClass(s)||(this.removeAnimationClasses(),this.el.addClass(s))},t.prototype.removeAnimationClasses=function(){for(var t=1;t<this.numBlocks+1;t++)this.el.removeClass(this.ANIMATION_CLASS_PREFIX+t)},s("[data-blocked-animation]").each(function(e,i){var o=s(i),n=parseInt(o.data("blocked-animation-blocks")),l=parseInt(o.data("blocked-animation-dead-zone"))||0;new t(o,n,l)})}();

!function(){"use strict";var t=jQuery,n="expand--collapsed",e="expand__button",i="expand__content",s=250,o=function(n){this.el=t(n),this.toggleButton=this.el.find("."+e);var s=this.el.data("expand");this.contentContainer=t("#"+s),this.contentContainer.length||(this.contentContainer=this.el.find("."+i)),this.isVisible()?this.show():this.hide(),this.setHandlers()};o.prototype.setHandlers=function(){this.toggleButton.click(this.toggle.bind(this))},o.prototype.toggle=function(t){t.preventDefault(),this.isVisible()?this.hide():this.show()},o.prototype.isVisible=function(){return!this.el.hasClass(n)},o.prototype.hide=function(){this.el.addClass(n),this.contentContainer.slideUp(s)},o.prototype.show=function(){this.el.removeClass(n),this.contentContainer.slideDown(s)},t(".expand").each(function(t,n){window.a=new o(n)})}();

!function(){"use strict";var o=jQuery;o("[data-fixed-block]").each(function(n,t){var c=o(t),r=c.parent();o(window).scroll(function(){var o=window.scrollY-r.offset().top;0>o&&(o=0),c.css({"margin-top":o})})})}();

!function(){"use strict";var e=jQuery,t="header__menu-container--closed",i="header__items",n="header__menu-container__expand",s=2e3,h=500,o=function(t){this.containerEl=e(t),this.header=e("header"),this.menuEl=this.containerEl.find("."+i),this.expandEl=this.containerEl.find("."+n),this.open=!0,this.hovered=!1,this.scrolledAway=!1,this.timer=void 0,this.setHandlers(),this.draw()};o.prototype.setHandlers=function(){e(document).scroll(this.handleScroll.bind(this)),this.header.hover(this.handleHoverIn.bind(this),this.handleHoverOut.bind(this))},o.prototype.handleScroll=function(){window.scrollY>h?this.scrolledAway=!0:this.scrolledAway=!1,this.checkAndDrawMenu()},o.prototype.handleHoverIn=function(){this.timer&&window.clearTimeout(this.timer),this.hovered=!0,this.checkAndDrawMenu()},o.prototype.handleHoverOut=function(){this.timer=window.setTimeout(this.checkAndDrawMenu.bind(this),s),this.hovered=!1},o.prototype.checkAndDrawMenu=function(){this.timer=void 0,this.scrolledAway&&!this.hovered?this.open=!1:this.open=!0,this.draw()},o.prototype.draw=function(){this.open&&this.containerEl.hasClass(t)?this.containerEl.removeClass(t):this.open||this.containerEl.hasClass(t)||this.containerEl.addClass(t)};var r=document.getElementById("header-menu");new o(r)}();

!function(){"use strict";var e=jQuery;e(".hover-image").each(function(o,t){var i=e(t).find(".hover-image__text__blurb");e(t).hover(function(){i.stop().show(250)},function(){i.stop().hide(250)})})}();

!function(){"use strict";var t=jQuery;t("[data-rotate-with-scroll]").each(function(o,r){t(window).scroll(function(){var o=window.scrollY/2;t(r).css({transform:"rotate("+o+"deg)"})})})}();

!function(){"use strict";jQuery(document).foundation()}();

!function(){"use strict";var o=jQuery,n=[];o(document).ready(function(){o("[data-steady-background]").each(function(c,s){n.push({el:o(s),offset:o(s).scrollTop()}),o(s).css("background-position-y",0)})}),o(window).scroll(function(){var o=window.scrollY;n.forEach(function(n){var c=n.offset;n.el.css("background-position-y",o-c)})})}();


//# sourceMappingURL=/wp-content/themes/ninteen-thirty-four/main.js.map
