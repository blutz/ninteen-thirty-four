(window.__googlesitekit_webpackJsonp=window.__googlesitekit_webpackJsonp||[]).push([[4],{165:function(e,t,n){"use strict";(function(e,a){var i=n(4),r=n.n(i),o=n(14),c=n.n(o),l=n(6),u=n.n(l),s=n(7),d=n.n(s),m=n(22),p=n.n(m),f=n(8),g=n.n(f),h=n(9),y=n.n(h),v=n(3),_=n.n(v),k=n(1),E=n(0),b=n(5),R=n(109),D=n(47),S=n(166),M=n(114);function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=_()(e);if(t){var i=_()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return y()(this,n)}}var C=function(t){g()(UserMenu,t);var n,i=N(UserMenu);function UserMenu(e){var t;return u()(this,UserMenu),(t=i.call(this,e)).state={dialogActive:!1,menuOpen:!1},t.handleMenu=t.handleMenu.bind(p()(t)),t.handleMenuClose=t.handleMenuClose.bind(p()(t)),t.handleMenuItemSelect=t.handleMenuItemSelect.bind(p()(t)),t.handleDialog=t.handleDialog.bind(p()(t)),t.handleDialogClose=t.handleDialogClose.bind(p()(t)),t.handleUnlinkConfirm=t.handleUnlinkConfirm.bind(p()(t)),t.menuButtonRef=Object(k.h)(),t.menuRef=Object(k.h)(),t}return d()(UserMenu,[{key:"componentDidMount",value:function(){e.addEventListener("mouseup",this.handleMenuClose),e.addEventListener("keyup",this.handleMenuClose),e.addEventListener("keyup",this.handleDialogClose)}},{key:"componentWillUnmount",value:function(){e.removeEventListener("mouseup",this.handleMenuClose),e.removeEventListener("keyup",this.handleMenuClose),e.removeEventListener("keyup",this.handleDialogClose)}},{key:"handleMenu",value:function(){var e=this.state.menuOpen;this.setState({menuOpen:!e})}},{key:"handleMenuClose",value:function(e){("keyup"!==e.type||27!==e.keyCode)&&"mouseup"!==e.type||this.menuButtonRef.current.buttonRef.current.contains(e.target)||this.menuRef.current.menuRef.current.contains(e.target)||this.setState({menuOpen:!1})}},{key:"handleMenuItemSelect",value:function(t,n){var a=e._googlesitekitLegacyData.admin.proxyPermissionsURL;if("keydown"===n.type&&(13===n.keyCode||32===n.keyCode)||"click"===n.type)switch(t){case 0:this.handleDialog();break;case 1:e.location.assign(a);break;default:this.handleMenu()}}},{key:"handleDialog",value:function(){this.setState((function(e){return{dialogActive:!e.dialogActive,menuOpen:!1}}))}},{key:"handleDialogClose",value:function(e){27===e.keyCode&&this.setState({dialogActive:!1,menuOpen:!1})}},{key:"handleUnlinkConfirm",value:(n=c()(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({dialogActive:!1}),Object(b.d)(),document.location=Object(b.m)("googlesitekit-splash",{googlesitekit_context:"revoked"});case 3:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"render",value:function(){var t=e._googlesitekitLegacyData.admin,n=t.userData,i=n.email,r=void 0===i?"":i,o=n.picture,c=void 0===o?"":o,l=t.proxyPermissionsURL,u=this.state,s=u.dialogActive,d=u.menuOpen;return a.createElement(k.b,null,a.createElement("div",{className:"googlesitekit-dropdown-menu mdc-menu-surface--anchor"},a.createElement(D.a,{ref:this.menuButtonRef,className:"googlesitekit-header__dropdown mdc-button--dropdown",text:!0,onClick:this.handleMenu,icon:c?a.createElement("i",{className:"mdc-button__icon","aria-hidden":"true"},a.createElement("img",{className:"mdc-button__icon--image",src:c,alt:Object(E.__)("User Avatar","google-site-kit")})):void 0,ariaHaspopup:"menu",ariaExpanded:d,ariaControls:"user-menu"},r),a.createElement(S.a,{ref:this.menuRef,menuOpen:d,menuItems:[Object(E.__)("Disconnect","google-site-kit")].concat(l?[Object(E.__)("Manage sites…","google-site-kit")]:[]),onSelected:this.handleMenuItemSelect,id:"user-menu"})),a.createElement(M.a,null,a.createElement(R.a,{dialogActive:s,handleConfirm:this.handleUnlinkConfirm,handleDialog:this.handleDialog,title:Object(E.__)("Disconnect","google-site-kit"),subtitle:Object(E.__)("Disconnecting Site Kit by Google will remove your access to all services. After disconnecting, you will need to re-authorize to restore service.","google-site-kit"),confirmButton:Object(E.__)("Disconnect","google-site-kit"),provides:[],danger:!0})))}}]),UserMenu}(k.a);t.a=C}).call(this,n(15),n(12))},166:function(e,t,n){"use strict";(function(e){var a=n(6),i=n.n(a),r=n(7),o=n.n(r),c=n(8),l=n.n(c),u=n(9),s=n.n(u),d=n(3),m=n.n(d),p=n(1),f=n(2),g=n.n(f),h=n(43);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return s()(this,n)}}var v=function(t){l()(Menu,t);var n=y(Menu);function Menu(e){var t;return i()(this,Menu),(t=n.call(this,e)).menuRef=Object(p.h)(),t}return o()(Menu,[{key:"componentDidMount",value:function(){var e=this.props.menuOpen;this.menu=new h.f(this.menuRef.current),this.menu.open=e,this.menu.setDefaultFocusState(1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.menuOpen;t!==e.menuOpen&&(this.menu.open=t)}},{key:"render",value:function(){var t=this.props,n=t.menuOpen,a=t.menuItems,i=t.onSelected,r=t.id;return e.createElement("div",{className:"mdc-menu mdc-menu-surface",ref:this.menuRef},e.createElement("ul",{id:r,className:"mdc-list",role:"menu","aria-hidden":!n,"aria-orientation":"vertical",tabIndex:"-1"},a.map((function(t,n){return e.createElement("li",{key:n,className:"mdc-list-item",role:"menuitem",onClick:i.bind(null,n),onKeyDown:i.bind(null,n)},e.createElement("span",{className:"mdc-list-item__text"},t))}))))}}]),Menu}(p.a);v.propTypes={menuOpen:g.a.bool.isRequired,menuItems:g.a.array.isRequired,id:g.a.string.isRequired},t.a=v}).call(this,n(12))},167:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(7),o=n.n(r),c=n(8),l=n.n(c),u=n(9),s=n.n(u),d=n(3),m=n.n(d),p=n(83);function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m()(e);if(t){var i=m()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return s()(this,n)}}var g=function(e){l()(ErrorNotification,e);var t=f(ErrorNotification);function ErrorNotification(){return i()(this,ErrorNotification),t.apply(this,arguments)}return o()(ErrorNotification,[{key:"render",value:function(){return null}}]),ErrorNotification}(n(1).a);t.a=Object(p.a)("googlesitekit.ErrorNotification")(g)},293:function(e,t,n){"use strict";n.r(t),function(e,a){var i=n(6),r=n.n(i),o=n(7),c=n.n(o),l=n(8),u=n.n(l),s=n(9),d=n.n(s),m=n(3),p=n.n(m),f=n(1),g=n(13),h=n(83),y=n(0),v=n(90),_=n(28),k=n(89),E=n(5);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var i=p()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return d()(this,n)}}var R=function(t){u()(BaseComponent,t);var n=b(BaseComponent);function BaseComponent(){return r()(this,BaseComponent),n.apply(this,arguments)}return c()(BaseComponent,[{key:"render",value:function(){var t=this.props.children;return e.createElement(f.b,null,t)}}]),BaseComponent}(f.a),D=function(t){u()(SetupWrapper,t);var n=b(SetupWrapper);function SetupWrapper(e){var t;r()(this,SetupWrapper),t=n.call(this,e);var i=a._googlesitekitLegacyData.setup.moduleToSetup;return t.state={currentModule:i},t}return c()(SetupWrapper,[{key:"render",value:function(){var t=this.state.currentModule,n=SetupWrapper.loadSetupModule(t),a=Object(E.m)("googlesitekit-settings",{});return e.createElement(f.b,null,e.createElement(v.a,null),e.createElement("div",{className:"googlesitekit-setup"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("section",{className:"googlesitekit-setup__wrapper"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("p",{className:" googlesitekit-setup__intro-title googlesitekit-overline "},Object(y.__)("Connect Service","google-site-kit")),n))),e.createElement("div",{className:"googlesitekit-setup__footer"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},e.createElement(_.a,{id:"setup-".concat(t,"-cancel"),href:a},Object(y.__)("Cancel","google-site-kit"))),e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--align-right "},e.createElement(k.a,null)))))))))))}}],[{key:"loadSetupModule",value:function(t){var n=Object(h.a)("googlesitekit.ModuleSetup-".concat(t))(R);return e.createElement(n,{finishSetup:SetupWrapper.finishSetup,onSettingsPage:!1,isEditing:!0})}},{key:"finishSetup",value:function(){var e={notification:"authentication_success"};a._googlesitekitLegacyData.setup&&a._googlesitekitLegacyData.setup.moduleToSetup&&(e.slug=a._googlesitekitLegacyData.setup.moduleToSetup);var t=Object(E.m)("googlesitekit-dashboard",e);Object(g.delay)((function(){a.location.replace(t)}),500,"later")}}]),SetupWrapper}(f.a);t.default=D}.call(this,n(12),n(15))},89:function(e,t,n){"use strict";(function(e){n(1);var a=n(0),i=n(28);t.a=function HelpLink(){var t=Object(a.__)("Need help?","google-site-kit");return e.createElement(i.a,{className:"googlesitekit-help-link",href:"https://sitekit.withgoogle.com/documentation/",external:!0},t)}}).call(this,n(12))},90:function(e,t,n){"use strict";(function(e,a){var i=n(6),r=n.n(i),o=n(7),c=n.n(o),l=n(8),u=n.n(l),s=n(9),d=n.n(s),m=n(3),p=n.n(m),f=n(1),g=n(135),h=n(165),y=n(167);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=p()(e);if(t){var i=p()(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return d()(this,n)}}var _=function(t){u()(Header,t);var n=v(Header);function Header(){return r()(this,Header),n.apply(this,arguments)}return c()(Header,[{key:"render",value:function(){var t=e._googlesitekitLegacyData.setup.isAuthenticated;return a.createElement(f.b,null,a.createElement("header",{className:"googlesitekit-header"},a.createElement("section",{className:"mdc-layout-grid"},a.createElement("div",{className:"mdc-layout-grid__inner"},a.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-3-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},a.createElement(g.a,null)),a.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--align-right-phone mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},t&&a.createElement(h.a,null))))),a.createElement(y.a,null))}}]),Header}(f.a);t.a=_}).call(this,n(15),n(12))}}]);