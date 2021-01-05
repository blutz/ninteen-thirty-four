=== Advanced iFrame ===
Contributors: mdempfle
Donate link: http://www.tinywebgallery.com
Tags: iframe, embed, resize, zoom, content, advanced, shortcode, modify css, widget 
Requires at least: 3.2
Tested up to: 5.5.3
Stable tag: 2020.9
Requires PHP: 5.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Include content the way YOU like in an iframe that can hide and modify elements and foreward parameters. You can also embed content directly.

== Description ==
> **[Advanced iFrame Pro](https://1.envato.market/b1vbg)** | 
> **[Demo](http://www.tinywebgallery.com/blog/advanced-iframe/demo-advanced-iframe-2-0)**
Include content the way YOU like in an iframe that can hide and modify elements and foreward parameters. You can also embed content directly or show a part of an iframe.

= Main features of advanced iframe =
By entering the shortcode '[advanced_iframe]' you can include any webpage to any page or article. 
The following cool features compared to a normal iframe are implemented:

- Hide areas of the layout to give the iframe more space (see screenshot) 
- Show only specific areas of the iframe when the iframe is on a same domain (The Pro version supports this on different domains) or include parts directly by jQuery
- Modify css styles in the parent and the iframe to e.g. change the width of the content area (see screenshot)
- Forward parameters to the iframe 
- Resize the iframe to the content height or width on loading, AJAX or click 
- Scroll the parent to the top when the iframe is loaded
- Hide the content until it is fully loaded 
- Add a css and js file to the parent page
- Security code: You can only insert the shortcode with a valid security code from the administration.
- Many additional cool features are available the pro version - see http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-comparison-chart 

In the free version you can enable the pro administration AND test many of the pro features in the preview!

Please note: Modification inside the iframe are only possible if you are on the same domain or use a workaround like described in the settings.

So please check first if the iframe page and the parent page are one the same domain. www.example.com and text.example.com are different domains! Please check in the documentation if you can use the feature you like

A free iframe checker is available at 
http://www.tinywebgallery.com/blog/advanced-iframe/free-iframe-checker.
This tool does check if a page is allowed to be included! 

All settings can be set with shortcode attributes as well. If you only use one iframe please use the settings in the administration because there each parameter is explained in detail and also the defaults are set there.

**[Quick overview of all advanced iframe attributes](http://wordpress.org/extend/plugins/advanced-iframe/other_notes/)**

= Limitations of the free version = 
The free version has no functional restrictions and is for personal and non-commercial sites. After 10.000 views/month the iframe is still working but below the iframe a small "powered by" notice with a link to the pro version is shown. If you hit this limit and you qualify for the free license please contact <a href="http://www.tinywebgallery.com/en/about.php" target="_blank">me</a> to get a version with a higher limit.

= Upgrading to Advanced IFrame Pro =
It's quick and painless to get Advanced iFrame Pro. Simply Get Advanced iFrame Pro on CodeCanyon.net (https://1.envato.market/mvGme) and install your new plugin! You can than use the plugin on commercial, business, and professional sites and blogs. You furthermore get:

* Show only specific areas of the iframe even when the iframe is on different domain
* Graphical content selector: http://examples.tinywebgallery.com/configurator/advanced-iframe-area-selector.html
* External workaround supports iframe modifications
* Widget support
* No view limit
* Hide areas of an iframe
* Responsive iframes
* Browser detection 
* Change link targets
* Url forward parameter mapping.
* Zoom iframe content
* Accordion menu
* jQuery help
* Lazy load 
* Standalone version - can be used in ANY php page!
* And much more...

You can find the comparison chart here: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-comparison-chart
See the pro demo here: 
http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo

= Administration =  
* Go to Settings -> Advanced iFrame

=	Quick start guide =
The quickstart guide is also available as video: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-video-tutorials 

To include a webpage to your page please check the following things first:

*	Check if your page page is allowed to be included http://www.tinywebgallery.com/blog/advanced-iframe/free-iframe-checker!
* Check if the iframe page and the parent page are one the same domain. www.example.com and text.example.com are different domains!
* Can you modify the page that should be included?

Most likely you have one of the following setups:

1.	iframe cannot be included:  You cannot include the content because the owner does not allow this. 
1.	iframe can be included and you are on a different domain: See the feature comparison chart: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-comparison-chart and the feature overview http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-features-availability-overview. To resize the content to the height/width or modify css you need to modify the remote iframe page by adding one line of Javascript to enable the provided workaround.
1.  iframe can be included and you are on the same domain: All features of the plugin can be used. 

If you mix http and https read http://www.tinywebgallery.com/blog/iframe-do-not-mix-http-and-https. Parent https and iframe http does not work on all mayor browsers!

== Installation ==
There are 2 ways to install the Advanced iFrame

*Using the Wordpress Admin screen*

1. Click Plugins, Add New
1. Search for advanced iframe
1. Install and Activate it
1. Place '[advanced_iframe]' in the editor directly or click on the "Add advanced iframe" button above the editor
1. Configure your iframe at your dashboard side menu -> "Advanced iFrame pro". For adding several iframes please see the examples and the FAQ.

*Using FTP*

1. Upload the 'advanced-iframe' folder of the download zip to the '/wp-content/plugins/' directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place '[advanced_iframe]' in the editor directly or click on the "Add advanced iframe" button above the editor
1. Configure your iframe at your dashboard side menu -> "Advanced iFrame pro". For adding several iframes please see the examples and the FAQ.

== Other Notes ==
= Advanced iframe attributes =

Below you find all possible shortcode attributes. If you only use one iframe please use the settings in the administration because there each parameter is explained in detail and also the defaults are set there.

Setting an attribute does overwrite the setting in the administration. 

[advanced_iframe securitykey=""   src="" 
  id=""   name="" 
  width=""   height="" 
  marginwidth=""   marginheight=""
  scrolling=""   frameborder="" 
  class=""   style="" 
  content_id=""   content_styles="" 
  hide_elements=""   url_forward_parameter="" 
  onload=""   onload_resize="" 
  onload_scroll_top=""   onload_show_element_only="" 
  store_height_in_cookie=""   additional_height="" 
  additional_js=""   additional_css="" 
  iframe_content_id=""   iframe_content_styles="" 
  iframe_hide_elements=""  hide_page_until_loaded=""
  include_hide_page_until_loaded="" 
  include_url="" include_content=""  
  include_height=""  include_fade="" 
  onload_resize_width=""   resize_on_ajax=""  
  resize_on_ajax_jquery=""   resize_on_click="" 
  resize_on_click_elements=""   use_shortcode_attributes_only=""
  onload_resize_delay=""
  ]


== Screenshots ==
1. Comparison between normal iframe and advanced iframe wrapper. The red areas are modified by the advanced iframe to display the content better.
2. This image shows the difference with an url forward parameter. In the advanced iframe a sub album is shown while the normal iframe still shows the entry screen.
3. The basic admin screen to enable standard settings
4. The advanced admin screen to enable advanced settings like html and css changes
5. The advanced admin screen to enable Javascript scroll to top and autoresize resize
 
== Frequently Asked Questions ==
Find the latest FAQ here:
http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-faq/

= Demo =
See the pro demo here:
http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo

See the free demo here:
http://www.tinywebgallery.com/blog/advanced-iframe/demo-advanced-iframe-2-0

== Upgrade Notice ==
Simply overwrite all files from your previous installation.
If you have some radio elements empty after the update simply 
select the one you like and save again.

== Change log ==
= 2020.9 =
- New: Hide URL in HTML. With hide_src you can now hide the real url in the html code. The url is replaced by a link to a script that redirects to the real URL. The URL is not in the source code but still little bit more advanced users are able to see the real url in the developer tools. For more information please see here: https://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/hide-url-in-html
- New: Disable right click when "Hide URL in HTML" is enabled.
- New: Support SameSite cookie for the safari fix, Keep iframe modifications outside iframe and the temples switcher template
- New: All demos are now configured to work with https. Some are still http to show http/https solutions. Some demos you cannot switch between https and http because some things in the config need to be hardcoded.
- New: Most links link to the https version where it makes sense.  
- New: You can now enter your purchase code of codecanyon to verify you are a paying customer. Currently this is optional. In the future it will unlock the pro features you have paid for.  
- New: A message was added if you have not added your purchase code from codecanyon. Can be removed by closing it.  
- New: Tested with WordPress 5.5.3
- New: A new global message was added if there is a discount available on codecanyon. Can be removed by closing it. 
- Fix: The ai_external.js hat at one place advanced_iframe hardcoded. This is now dynamic so it also works if you pick another default id for the external workaround. Thanks to Marc for finding this.
- Fix: Get_magic_quotes_gpc was removed as it is depecated since php 5.4 
- Fix: Updated some links in the wordpress documentation as they changed
- Fix: enable_responsive_iframe gets !important at width, max-width, min-width settings to avoid that other scripts overwrite this
- Fix: The origin detection for https was done by a wrong $_SERVER variable.
- Fix: History link was fixed

= 2020.8.1 =
- New: Tested with WordPress 5.5.1
- Fix: Javascript error in the ai_external.js was fixed.

= 2020.8 =
- New: WordPress 5.5 changed the behaviour of the parameter page in the url! You now get a 301 redirect on normal pages if you use ?page=XXX. Unfortunately this also kills url features of advanced iframe pro. You can now set "Fix WordPress 5.5 page parameter change" to true on the administration. Then you can again use ?page=abc for example again. Numeric values are still not allowed because removing this internally would kill the pagination where the page paremater is really used!

= 2020.7 =
- New: The iframe can now be reloaded when the browser is resized or the device is rotated. This can be done in the reload feature by adding r as prefix. 
- New: The whole page can now be reloaded when the browser is resized or the device is rotated. This can be done in the reload feature by adding r as prefix AND a p at the end. 
- New: Compatible with Wordpress 5.5 now. The postboxes in the administration where changed and needed to be adopted. Now the new style is used if you use WP >= 5.5
- Fix: Small css fix for the post boxes. 
- Fix: Added some missing settings to the standalone version.

= 2020.6 =
- Fix: Lamba functions where removed in Javascript as this is not supported in IE11. Now also IE11 is also fully supported again. 
- Fix: The param function which checked parameters failed when an array is given. Now this is detected and the first values is used and checked.

= 2020.5 =
- Fix: The additonal text in the Gutenberg editor was shown also in the normal page if only the Gutenberg editor is used. Now it is only shown in the edit mode.

= 2020.4 =
- New: You can now enable all PRO features in the free version that can be set by a shortcode and test them in the preview of Wordpress.
- New: The height field does support media queries. So you can define the height of the iframe depending on the browser width. Before you need to know how media queries work. Now you simply enter the values you like! See: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/set-height-with-media-query
- New: The "Show only a part of the iframe" solution does support media queries. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe#e55
- New: The advanced tab was rewritten. Now meta boxes that store their state are used here as well.
- New: The reload features now also supports only one single reload.
- New: Internal help links do now flash twice at the destination to show the setting which should get attention. 
- New: Help was improved by rewriting and adding an image to how to find an id section. 
- New: A default for open and closed boxes after reset/activate is set now. 
- New: hide_part_of_iframe does now support "changeViewport" as url. This makes it possible together with "show only a part of the iframe" to create a iframe which shows a small area first and once clicked the iframe enlarges to a bigger viewport. This makes sens if you don't have access at all and your application inside is an ajax application which does not fire an onload event which would change the viewport normally.  
- New: In the Gutenberg block preview a margin-top of 10px is added to make it possible to select the block again. Before you could only do this by selecting the area almost at the bottom where the + is shown or if your iframe was not 100%.
- Fix: Because of a unknown reason the block editor in the additional field replaces " with u0022. Internally now the u0022 is replaced again properly. But you still have in the additional field the wrong display. Lets hope Wordpress/Gutenberg fixes this bug soon.
- Fix: Area selector was not enabling all fields automatically.
- Fix: Language files were not used anymore. Renaming them to advanced-iframe-en_US.* enabled them again. 
= 2020.3 = 
- New: You can now include an iframe to ALL your pages. The iframe you define in the administration is used. This is very cool if you like to use the "Show iframe in layer" for all external links. Also nice for e.g. a chatbot or a overlay you need on all pages. The new setting is in the "Show iframe as layer" section.
- New: The e-mails for checking iframes do now contain the pages which have problems so you can check right away. I added this because I had sometimes error message but when checking they where gone already and I did not know what failed. So now you can also identify instable iframes.
- New: The detection of iframes for the iframe checker in a page does now take also new lines in the source code into account.
- New: The message of the cron job to detect broken iframes was improved. It shows now the number of iframes that failed because because http iframes where loaded in https pages.
- New: Better RTL support.
= 2020.2.1 =
- New: Tested with Wordpress 5.4 - no issues found.

= 2020.2 =
- Fix: Auto height for pages over 10000 pixel where not working anymore because of the new fix when the size only changes 5px (see 2020.1 last line). The last used height was saved at the wrong place.

= 2020.1 =
- New: Remove elements from height. You can now do extended height calculations. Like using a height of 100vh - the height of the elements you define. Like a header where the rest of the page is the iframe. But compared to the static version (100vh - 100px) this does also work perfect for headers which change depending on the browser resolution.  
- New: Improved version check. Now a nice json is used internally 
- Fix: url_forward_parameter was checking duplicate parameters by a simple contains. This leads to problems is substrings where already matching in the url. Now  the full parameter name is checked. 
- Fix: resize by element resize in the external workaround is only triggered if the difference is > 5 px. Reason. Some websites have min-height:100% defined. If the iframe gets bigger also the page inside does. And as I add 4px for IE this means that the page will grow and grow.  The solution for the same domain does not use the 4px so there is is not needed - So if you have this 4x issue with IE - also use the external workaround locally as this is the pro solution compared to the free solution :)  

= 2020 =
- New: The iframe checker was rewritten to work in parallel. So you can even test 1000 urls at once! 
- New: The iframe checker does check also normal iframes! Not only advanced iframes! 
- New: Full redesign of the backend. It uses Wordpress dashboard boxes now at many places.
- New: The iframe checker does now also check the content security header header for restrictions
- New: The url in the administration is only checked once every hour now. This does improve loading times of the administration a lot.  
- New: The size of the loader icon in the custom folder is now detected automatically.
- New: Tested with WordPress 5.3.2
- New: many document.write in ai_external.js where replaced to include js and css more elegant
- New: Documentation on the external workaround was improved.
- Fix: post messages which are not in json format throw an error in the console. Now this error is catched and only logged in the debug mode of post message. This was fixed in the plugin and the ai_resize.js
- Fix: The "Map parameter to url" was stripping / from the parameter. Depending on the setup this lead to an error. Now the / is added in the code if missing. 
- Fix: The "Add iframe url as param" is now not appending parameters again and again after a reload. They only happened if you also use "URL forward parameters"
- Fix: enable_ios_mobile_scolling is now enable_ios_mobile_scrolling. Internally it is still the old but in shortcodes and the generator it is still enable_ios_mobile_scolling. So old short codes do still work!
- Fix: The shortcode generator was using the defaults for the free version. Now it uses the right one depending on the version. 

= 2019.10 =
- Fix: The loading icon was broken because of a missing ". Now it works fine again.

= 2019.9 =
- New: The debug console can be enabled by adding the url parameter aiEnableDebugConsole=true to the url of the parent page. This writes a session cookie and debugging is enabled as long your did not close your browser.  aiEnableDebugConsole=false does disable it again!
- New: Debug console was rewritten. It does now display all possible logs in the browser console again and the debug div!
- New: By adding ?aiEnableCheckShortcode=true to the url the short code check is enabled dynamically. At the preview this is now added all the time!
- New: userinfo data and usermeta data documentation was improved. If you use & = in meta or user info like in a query string you have to split this data into 2 custom fields as all fields are url encoded.  
- New: Improved documentation and quickstart guide.
- New: Disabled elements are now also in a disabled text color
- New: When the pro version is active resize on element resize is available and resize_on_click, resize_on_click_elements, resize_on_ajax, resize_on_ajax_jquery are removed from the administration because this replaces this features in a much better way. 
- Fix: Depending on the setup more then one onload event can be fired. Now the onload counter has a measurement timeout that solves this problem.
- Fix: postmeta extraction had a copy past error.
- Fix: user info and user meta divs do now break properly even when there are no spaces in the string.

= 2019.8 =
- New: Config files can now be included directly into ai_external.js. See the new section at the "external workaround" tab. This makes it possible to reduce dependencies on the other site. You only have to include ai_external.js now! You can even include the config switcher directly now!
- New: ai_external.js is also compressed and available as ai_external.min.js
- New: ai.js is compressed but currently not used yet as this is in testing phase. if it works fine this file will be used in the next update. 
- New: Replace all normal html iframes with advanced iframes on your page. 
- Fix: Anchor and add of url parameters are now also working together!
- Fix: vh and vw where not allowed in the width/height field in the Javascript validation. Now the administration does allow all useful settings. 
- Fix: Many small typos fixed in the administration.
- Fix: As edge for IOS the administation was not initialized and therefore the tabs where not working. Now there is an additional check included for this browser
- Fix: Scroll to top when set to iframe was not scrolling properly. Now a small timeout and an improvement how to measure the offset was done.
- Fix: Scroll to top and scroll to an anchor was inferferring. Now if a # is in the url the scroll to top feature is disabled.
- Fix: Chrome was scrolling 367 pixel to the bottom when a # without an anchor was defined. the # is now removed automatically to avoid this jump.

= 2019.7 =
- New: Add iframe url as param has 2 new features! Using an id instead of the url and using also urlrewrite for better urls. So instead of e.g. ?page=www.tinywebgallery.com/test/test.html the url looks not like this: /page/1. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/add-iframe-url-to-parent
- New: Add iframe url as param does now also supports the handling of existing query parameters 
- New: Update jQuery local fallback copy to 1.12.4 (like Wordpress does since 4.6)
- Fix: Add iframe url as param failed if the parameter itself was also included in the main url. Now this also is supported.

= 2019.6 =
- Fix: Completely empty shortcodes [advanced_iframe] throw an error. Now this is covered. 

= 2019.5 =
- Fix: Hiding the iframe during page transitions was not working. 

= 2019.4 =
- Fix: IE does not support .includes. A polyfill was added to fix this
- Fix: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/change-links-targets#e10 was fixed if you hover over the form! Because at a form change_iframe_links_href="append~?conf=1" does not make sense. A check was added if the element to modify has a href to modify.

= 2019.3 =
- Fix: In 2019.2 the administration was broken. This now works again!
- Fix: Additional js can now also be added in the header like ai.js! This fixes a problem with IE where the custom script was loaded too late!  http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/integrate-iframe-sizer-script now works in IE!

= 2019.2 =
- New: Improved documentation of the external workaround.
- Fix: Invalid anchors like #foo&foo2 are ignored because this is then no real hash but maybe a hash used for some business logic. 
- Fix: Error message in the internal debugger was fixed if no headers could be detected. 

= 2019.1 =
- Fix: startsWith is not supported in IE11. It was replaces with a different implementation. This was used in the "Add iframe url as param" feature
- Fix: 3 links from the administration where pointing to old urls. Now they point again to the correct ones.
- Fix: Fixed typos in the administration

= 2019 =
- Tested with WP 5.2
- New: iframe anchor support! if you enable auto height you can now also specify an anchor in the iframe! the parent does then scroll automatically to this location! Does work on the same domain even in the free version. In the pro version this is also supported external domains by the external workaround. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-with-post-message Example 51 
- New: Full Gutenberg support. An advanced iframe block is now available. parent_content_css is now rendered a little bit later because of the Gutenberg preview.
- New: You can now change also the href of links and not only the target! change_iframe_links_href does work for the same or in the external workaround. It can also be used to add a string to the existing  href. It also does work for links which are later on added to the webpage by ajax. Delegated event handlers are used here. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/change-links-targets  
- New: Targets can now also be changed for links which are added later to the website. Delegated event handlers are used here now.
- New: The calc support was improved. px is now automatically added when needed. 100%-100 -> 100% - 100px. Because without px is does not work!
- New: You can set a custom loader icon by saving a loader.gif in the advanced-iframe-custom folder in a size of 66x66
- New: “ ” ‘ ’ are now remove from shortcodes. This fixes mistakes from users which used the wrong single or double quotes.
- New: You can now also delete all data from the database when uninstalling. By default this is off. This can be now enabled on the options page. 
- New: An uninstall.php does exist now. So if you set the settings in the administration the database can also be cleaned up when you delete the plugin.
- Fix: the src is now always encoded to be sure that url_forward_parameter cannout be use for xxs attacks. 
- Fix: height and width do now get px added in the style attribute if not entered.
- Fix: header('P3P:.... is now added in the action send_headers and NOT in the init anymore at it was interfering at a user with one on his plugins. 
- Fix: Some changes to css and js where made to be more compatible to the new codecanyon plugin coding rules. 
- Fix: Editor button was not working in new posts. It was only working when editing existing ones. 
- Fix: $fixChrome65 was not working for next view ports properly. now it does ;).
- Fix: set_time_limit can be disabled. Now this is checked and also @set_time_limit is used now. 

= 7.6 =
- New: Support of the safari cookie fix from http://vitr.github.io/safari-cookie-in-iframe/. Please see the documentation at "Safari cookie fix" on the advanced tab. See example http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/3rd-party-cookie-in-iframe-workaround. This setting can be done at the "Advanced Settings" tab -> "Advanced features" section.  
- New: The safari coookie fix is also availabe in the resize.js. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-add-ai_external-js-local 
- New: header('P3P: CP="ALL DSP NID CURa ADMa DEVa HISa OTPa OUR NOR NAV DEM"'); is now set by default to allow cookies in IE. You have to set this manually for remote pages.
- New: Cookie fix for IE is included and added to the documentation (p3p header is sent!). See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/3rd-party-cookie-in-iframe-workaround
- New: Scroll to top is now also available for the external workaround for ajax forms. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-with-post-message#e51
- New: Scroll to top is now also available if you share your content to a different domain. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-add-ai_external-js-local
- New: Extended jQuery help and documentation for finding external links and changing the target there!
- New: Margin top and botttom is now set to 0 of the elememt to measure to avoid that you need to use the additional height setting if this is not the case. 
- New: Improved the add_iframe_url_as_param_prefix setting. Additional checks was added for https. s| is now only added when a https site is included into a http page. 
- New: The mapping of parameters from the parent url is now done after "Map parameter to url". So that this 2 features now work together!
- New: Standalone version does now also support to be included inside a method. This makes is possible to include it also to e.g. Joomla
- New: Standalone version does now support to set $iframeStandaloneOptions directly before you include the standalone version. This makes it possible that you don't need to create a settings file but define it before the include.
- New: Standalone version was now tested with the latest version of Joomla 3.8.10 with the usage of phpDirect successfully.
- New: resize_on_element_resize is now initialized in the onload event and not only once. So it works on next pages in an iframe also! 
- New: Demo for iframeresizer
- New: Resize summary on the website: http://www.tinywebgallery.com/blog/advanced-iframe-resize-to-content-summary
- New: The reset to default get postMessage communication as default as only 0.2% of all used browsers (IE <= 8) do not support this! When the project was started this was almost 20%!
- New: {session_id} is now available as url parameter. If a session does exist it is replaced by the session id otherwise with a empty string.
- New: Added overflow:hidden by default to the ai_wrapper_div. Seems that the measurement especially for floating layouts is better then. This is also added to the documentation of the "element to measure". 
- Fix: $hide_page_until_loaded unload event is now moved as last part of the onload event and surrounded with a try/catch. This caused the hide_part_of_iframe feature to fail when it was used on different domains. So now the $hide_page_until_loaded works again on different domains but without otimized page transitions. But for this you should still use hide_page_until_loaded_external if you like to hide css modifications on an external domain. 
- Fix: Improved documentation of show_part_of_iframe_style
- Fix: wp_kses was not mapped in the standalone version. 
- Fix: advanced-iframe-custom folder in the standalone version für a custom loader icon is now also mapped correctly.
- Fix: The area selector was not inserting the security key properly after the security key was made optional. Now it is inserted properly again.
- Fix: The code for $hide_page_until_loaded changed because if about:blank is used as default the onload event was fired too fast.

= 7.5.7 =
- New: Keep iframe modifications outside iframe: Normally the page in the iframe is only modified if it is in the iframe. But sometimes the page in the iframe does not work properly in the iframe in a workflow. So you need to jump out out of the iframe. But you maybe still want to hide/modify the content of this page even outside the iframe. This feature does enable this by setting a session cookie. If you enable this feature a cookie is set if you do modifications in the iframe and even if you jump out of the iframe the modifications are still done. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-auto-height-and-css-modifications 
- New: "allow" is now supported as attribute. This is needed to still allow auto play. See: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
- New: A new default page is now set. Instead of //www.tinywebgallery.com now //www.tinywebgallery.com/blog/advanced-iframe is used. The 2nd page makes more sense as it also contains help after installation. After activation this url is replaced if the old default is still present.  
- New: multi_domain_enabled is now set to true by default to make configuration easier.
- New: hide_page_until_loaded_external does now also take onload_resize_delay into account. Means the page is now shown always after the delay for resize and modifications.
- Fix: "Resize remote iframe to content height" in the administration was alway jumping to "External" and not to "Yes" because of a wrong name of the field. Now "Yes" can be selected again. 
- Fix: The error message that is displayed in the frontend has now a rel="nofollow" to avoid unwanted link sharing.   
- Fix: Improved the documentation on the external workaround page.
- Fix: The placeholder for rgba was changed from ; to § to still support additional styles in the "hide a part of the iframe" feature,  

= 7.5.6 =
- New: $hide_page_until_loaded does now hide the page again for onload events after the initial one. So css modifications are now also invisible for all page transitions. Before this was only possible by using the external workaround even on the same domain. 
- New: "Check iframes on save" can fail and a white page is then displayed if curl is blocked on the server. If this is the case this feature is now disabled automatically. By default it is disabled since 7.5.5 anyway. But the reason is curl and not virtual composer as supposed in 7.5.5 ! 
- Fix: 7.5.5 was adding the fake plugin which caused the activation of the normal plugin to fail because WP was scanning the wrong file. The file is now internally renamed and now it works also fine when installing with the zip.  

= 7.5.5 =
- New: Optimized the "Add iframe url as param" feature. |s is only used when needed and / is now not encoded in the url. So the urls look nicer now. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/add-iframe-url-to-parent/add-iframe-url-as-param-same-domain
- New: ai_external.js can now also be added directly to the admin as well. This makes it possible to use the external workaround there. Like for the site this makes sense for some setups where you want to use features like "write css directly" on the same domain.
- New: change link targets do now support a[href='xxx'] also in the shortcode. You ned to replace [ ] with {{ }} because otherwise Wordpress thinks [] is a shortcode.
- New: resize on the same domain is not triggered anymore if about:blank is in the url. This is useful if you open links in an existing iframe but initially about:blank is set.  
- New: check_iframes_when_save is now false by default as a user reported a problem with virtual composer.
- Fix: The custom folder is now a fake plugin because otherwise the files in the custom folder cannot be saved with the internal Wordpress folder.
- Fix: Chrome 65 has a bug which causes "Show only a part of an iframe" to fail sometimes. This is fixed in chrome version 66. But it will be released in 2 weeks and therefore a  workaround is needed till then.
- Fix: The free version was checking iframes with a cronjob which is feature of the pro version. But it could not be disabled as the settings where missing there. Now it is disabled again and available in the pro version only.
  
= 7.5.4 =
- New: The security key is now optional. You can still set if like before in the administration and the behavior is exactly like before. But many users told me they don't need it and therefore I made it optional now by default. 
- New: The view limit of the free version does now not make the iframe stop but is showing a powered by message below the iframe.   
- New: If $add_iframe_url_as_param is set then $map_parameter_to_url is set to "page" by default if not set differently in the config.
- New: Better documentation of the resize on the same domain. resize_min_height is now documented there with possible alternate solutions if is does not work.
- New: All js files where checked with jshint and all errors/warnings where removed. So now if you open the files in the Wordpress editor you should not get any complaints anymore.
- New: The automatic check of the url can be enabled/disabled now. When the load of the administration does fail it is automatically disabled now because otherwise the administration screen could be white. 
- New: The save checks when you save a post or page can now be configured. You can disable it, show only errors or errors and warnings. Default is now error.
- New: ai_post_message_converter.js is now iframe id dependent. This makes it possible to have different post messages on the same installation at the same time. the naming is now: ai_post_message_converter_<id>.js. You can still use ai_post_message_converter.js which applies for all iframes then.
- New: Added the documentation for the BBCode [advanced_iframe]url[/advanced_iframe]. This was only documented in the FAQ.
- Fix: The normal show iframe (without any header/footer) as layer was always 100% instead of 96%. This was because of a change in 7.5.2 and is now fixed.   
- Fix: ai_post_message_converter_template.js was not working properly as event.data can not be overwritten. Now the converter does return a new modified object which is used after that.
- Fix: In the iframe tag ' was used for all attributes. This is now replaced with " where every possible. Only the onload='' attribute uses still the single quote because double quotes are used a lot inside. This enhanced the compatibility with WpRocket
- Fix: A Javascript error in aiAutoZoomExternal was fixed. This caused the feature "auto zoom by ratio" to fail. This now works fine again. 
- Fix: allowfullscreen was only enabled in the pro version but it should be available in the free version. Now this is the case.

= 7.5.3 =
Fix: An error in ai_external.js was fixed which prevented the external workaround to work with postMessage and debug log enabled.

= 7.5.2 =
- New: Provide parts of your website to other domains with "Enable content filter". This new feature does actually not provide an iframe but you can offer parts of your website identified by an id in an external iframe with additional auto height. The content can be clipped on the server and on the client depending on your setup. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-content-filter
- New: Provide parts of your website to other domains with "Add ai_external.js local". The setting does add the ai_external.js to your own site. This enables you to provide parts of your site into an external iframe. This is similar to "enable_content_filter" where you can filter parts of your page. The advantage of this solution is that you can use all css modifications and auto height of this solution. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-add-ai_external-js-local  
- New: Internal JS debug console: debug_js. You can redirect the Javascript console log to a visible div. The pro version also supports the external workaround. This is very useful if you have errors only on e.g. an ipad where accessing this info is very hard. Also the user agent and the full headers from the iframe are displayed there! See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/debug-javascript-example
- New: The free iframe checker is included at the url field in the administration. So you can do a basic check already there.
- New: Each iframe url is now checked when you save a post! As many users seems not to use the free iframe checker, the checker is now included there as well. 
- New: All iframes on your site can be checked by a single click. Simply check "Check all iframes" at Url on the basic tab.
- New: All iframes on your site can be checked by a cronjob. So once a day a status e-mail is sent to the e-mail you provide. Please read the instructions on the options tab because maybe you need to switch to native cronjobs if you have many iframes because of performance reasons. 
- New: "hide parts of the iframe" does now support semi transparent backgrounds. So rgba(1,1,1,0.5) does work. But , has to be replaced by ;. So rgba(1;1;1;0.5) is the format you need to use.
- New: "hide parts of the iframe" supports that divs can be removed by a click again with adding $hide after the color.
- New: "hide parts of the iframe" supports that divs can be removed automatically  after a specified time with adding $hide3000 after the color. So after hide you add the time in ms.
- New: The delay of the resize of the external workaround does now also delay the init of the resize to element resize. This solves the problem if elements are loaded dynamically. 
- New: vh and vw are now officially supported. See https://caniuse.com/#feat=viewport-units
- New: html title is now supported.
- New: jquery-lazyload-any was updated to v0.3.1. Also "Script Style" is now used instead of "Comment Style". This has now the big advantage that lazy load still works even if tools which do optimize the html by removing comments. So it is now compatible with e.g. wp rocket. 
- New: iframe_redirect_url does now also check if the page is included by the domain specified. Otherwise it is redirected to the iframe_redirect_url. This way you can make sure that the iframe page can only be included by your domain. This solution depends on Javascript and also that a referrer is sent to the iframe. But this is no 100% protection because you can fake the referer on some setups with a javascript location redirect (See https://stackoverflow.com/a/30304058) and if you disable Javascript with a sandbox. So please add a css with html { visibility:hidden; } to the page in the iframe. This does hide the page by default for everyone. The ai_external.js does then make the page visible again! If no referer is found the iframe_redirect_url will be used always if the page is in an iframe.  
- New: Wrong configurations of 'resize to element resize' is detected now and is logged to the console. A try catch was added to handle this problem properly.
- Fix: The resize in the external workaround does now reset the resize delay at is does not makes sense here. 
- Fix: The resize later was not not updating  the last height. So resize later stopped working at some configurations.

= 7.5.1 =
- New: $onload_scroll_top does now support "iframe" as setting. The page does then scroll to the top of the iframe and not of the page.
- New: The delay of the resize of the external workaround does now also delay the modification of the css as most of the time the elements that should be modified also are then also loaded dynamically (Pro) 
- New: Improved the documentation of change link targets that also forms can be changed!
- Fix: Not all IE versions (<= 11) do support default method values. So e.g. even auto height does fail! This was introduced in version 7.5. So please update if you use 7.5!  Now the code is rewritten to support older IE versions as well.  
- Fix: The resize delay in the external workaround does not try to measure height and width before the delay anymore which can lead to wrong messages in the js console. (Pro) 
- Fix: The resize delay in the external workaround is now added to the first resize on element resize call. (Pro) 
- Fix: AUTH_KEY is now set to AUTH_KEY_MISSING if it is not set in wp-config
- Fix: In the standalone version the browser detection a wordpress function was used that was not mapped. Now the normal php function Worppress also uses is used. (Pro)

= 7.5 =
- New: Added nice icons to the menu and the editor button
- New: The editor button does now support ALL settings. By default this is now securitykey,src,width,height.
- New: Show iframe in layer can now unload the iframe when closed. So e.g.music does stop then. If not unloaded it is now not loaded again! Before it was nut unloaded but on reopen loaded again! See show_iframe_as_layer_keep_content. Default is true (Pro) 
- New: Show iframe as layer does now support the loading icon (Pro)
- New: Show iframe as layer does now support "hide content until loaded"  (Pro)
- New: Show iframe as layer background has now a pointer to make clear that the layer closes if clicked. 
- New: parent_content_css was added for the pro version. This gives you additional options when you modify the parent and you don't want to create an external css file for this!
- New: If element_to_measure cannot be found we show an error message in the console log. 
- New: If resize_on_element_resize cannot be found we show an error message in the console log. 
- New: Improved quickstart guide and improved documentation on the basic tab.
- New: The shortcode generator is now available for the free version also. 
- New: standalone version js was upgraded to 7.5 as well. (Pro)
- New: Browscap version 6023 lite 04 May 2017 is now included. (Pro)  
- New: A modified version of php-browser-detection 3.2 is now used which does now also auto update browsecap.ini. Also os (operating system) can now be used. Like Linux, Android, Win7, Win8, WIN10 .... 
- New: "Show part of an iframe" also supports media queries for the basic setup. Demo 55 shows how this works.                                           
- New: Added an additional hint to use the external workaround if auto height with the same domain does not work. 
- New: Unique class for each viewport. This also enables to e.g. enable scrollbars, media queries... to other viewports. See example 3 http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe#e3
- New: Improved the add_iframe_url_as_param_prefix setting. Additional checks was added for https. So switching from http to https and using the old bookmarks without the s| still works.  
- New: Add to docu that inactive for the editor is o.k. and if is does not work create/edit the files manually
- New: include_scripts_in_content=true. This is only needed in the special case if you use the page with content only (like using the plugin "Show Content Only" with "Content + Styles" mode). Then ai.js is directly rendered before the iframe. See demo <a target="_blank" href="http://www.tinywebgallery.com/blog/advanced-iframe/demo-advanced-iframe-2-0/same-domain-wrapped-auto-height">wrapped auto height</a>
- New: Support for Wordpress 4.8.1
- Fix: Chrome is now detected by the browser detection again.
- Fix: Viewports in "Show only a part of the iframe" where not working because of a change in 7.4.1. Now it works fine again. 
- Fix: resize_on_ajax_jquery was set to false as default if disabled and not to true. This causes that in the shortcode generator was always showing  resize_on_ajax_jquery="false" 
- Fix: The resize script was included in 7.4.2 to ai_external.js directly. The dead code that was adding the script dynamically to ai_external.js was removed.
- Fix: In expert mode the src is now also hidden completely. 
- Fix: Invalid settings for dataPostMessage are now detected and printed to the log.
- Fix: Documentation of debugPostMessage, usePostMessage, additional_css_file_iframe was added/fixed

= 7.4.3 =
- Fix: iframe_redirect_url was brocken in 7.4.2 because of a missing ). 
 
= 7.4.2 = 
- New: The resize script is now direclty added to the ai_external.js. Chrome does show a warning now if js files are loaded internaly with document.write and this is now not done anymore. Also make sure you load jQuery manually in your pages as ai_external.js does also load jQery this way! 
- New: iframe_redirect_url does now support that only in case no ? is found in the iframe_redirect_url the parameters of the iframe are added again. 
- New: Enhanced the documentation for iframe_redirect_url
- New: Support for Wordpress 4.7.4
- Fix: window.location.search was addd with a ? too much to iframe_redirect_url 
- Fix: a couple of settings where not enabled/disabled properly when main elements where toggled. Now also the defaults are set properly everywhere.

= 7.4.1 =
- New: Documentation for ai_config_switcher_template was added to the "external workaround" tab.
- New: Resize on element resize does also trigger the modification of the iframe again. This makes is possible that stuff loaded by e.g. ajax can also be changed!
- New: "Show only a part of the iframe" css settings for the iframe do now use !important at the styles for the iframe to make sure that iframe settings e.g. from the theme like iframe { width:100%; } or other plugins that try to resize iframes dynamically will not kill this feature
- New: z-index for iframe in a layer was increased to 100001-100003 to stay over the wp-admin bar!
- New: iframe in layer background layer is now inserted at a different location in the dom to support more themes.
- New: Support for Wordpress 4.7.3
- New: Standalone version was updated to the lastest version + postMessage is now default there too.
- Fix: Edit/view of files in the custom folder was not working anymore because of a WP change. Now this works again. The editor shows (inactive) as this files are in a folder with no active plugin directly.
- Fix: Added missing px settings at a css style for "Show only a part of the iframe" 
- Fix: iframe in a layer backgroud div is now added to a diffent position in the dom to be more flexible with other themes tha also defines z-indexes. 

= 7.4 =
- New: New installations get postMessage communication as default as only 0.2% of all used browsers (IE <= 8) do not support this! When the project was started this was almost 20%!
- New: Improved documentation of the external workaround tab.
- New: "Hide part of an iframe" is now also included to the area selector. 
- New: "Hide part of an iframe" has now an extra section in the config.
- New: If we have a wrapper div we set this as default element to measure. This avoids problems if dynamically other elements are added by other scripts!
- New: default element can be set on the external workaround tab and not only before the ai_external.js
- New: Warning is shown in the log if the element cannot be measured
- New: Add better support for element to measure -> getbyid -> jQuery...
- New: Warning is shown when id starts with a number
- New: Seems some seo tools do render the shortcode in the administration. This can cause that the whole administration is hidden if hide_content_until_iframe_color is set. Therefore  if wp-admin is found in the url the following parameters are disabled: hide_page_until_loaded, hide_page_until_loaded_external=,hide_content_until_iframe_color to avoid this problem.
- New: New help section postMessage comunication vs. iframe 
- Fix: The reserved words link in URL forward parameters is now working
- Fix: add a ; automatically after the style to avoid configuration errors

= 7.4.3 =
- Fix: iframe_redirect_url was brocken in 7.4.2 because of a missing ). 

= 7.3.3 =                  
- New: Support for Wordpress 4.7.4

= 7.3.2 =
- New: Support for Wordpress 4.7.3
- Fix: Edit/view of files in the custom folder was not working anymore because of a WP change. Now this works again. The editor shows (inactive) as this files are in a folder with no active plugin directly.

= 7.3.1 =
- New: Support for Wordpress 4.7

= 7.3 = 
- New: The external workaround postMessage solution is now using a json structure to transfer the data. This is needed to enable the next feature
- New: You can define elements in the external workaround postMessage solution that are read from the remote iframe and added a element in the page. This enables you to include content directly if you simply hide the iframe! This is like include content directly with even more power then the one for the same domain! See the examples how cool this works: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-with-post-message#e52 (Pro)
- New: Support of the external workaround when you include https pages into http pages! See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-with-post-message#e53 (Pro)
- New: postMessages from non advanced iframe sources can now be used and converted. See ai_post_message_converter_template.js how this works. Enable use_post_message="debug" to check if a remote page does send messages you can use! (Pro)
- New: show_iframe_as_layer_full has a new option: "original". Than the max size of the layer is the given size of the iframe. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-the-iframe-as-layer#e54 (Pro)
- New: The layer is now closed also if you click anywhere outside the iframe. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-the-iframe-as-layer#e54
- New: Documentation was improved for many settings.
- New: The accordeon menu is now only on the advanced tab.
- New: Help topics where all moved to the help tab.
- New: jQuery help is available for everyone. 
- New: php 7 compatible
- New: Placeholders are removed if not resolved. (Pro)
- New: At many placeholders your can now define default values if the value can not be resolved. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/url-features#h49 (Pro)
- New: Load a config file depending on a given parameter in the url. see js/ai_config_switcher_template.js and the documentation inside - makes it possible to use one page with different configurations! (Pro)
- New: enable_external_height_workaround has a new state: External. This is now the default as in the ai_external.js auto height is now set to true as most people who use the external workaround use this as default. true does still enable this setting in the ai_external.js but also disables all settings which do not work on the same domain. So if you use several iframes with the external workaround and the same domain you should set this setting to External and set enable_external_height_workaround="true" in the short code for full flexibility. 
- New: A warning is now shown if you use the external workaround without post communication and an https iframe is used in a http page. (Pro)
- New: hide part of the iframe element has now an id. This makes it possible to add e.g. an additional stylesheet with media queries to change the size depending on the browser solution. See: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/hide-a-part-of-the-iframe#e50 (Pro)
- New: postMessage is now in a small extra box to make this setting more visual. (Pro)
- New: Browscap version 6017 lite September 22, 2016 is now included. (Pro)
- New: Support for Wordpress 4.6.1
- Fix: Search was always hiding elements on the external tab in the sub domain section.  

= 7.2.2 =
- New: Support for Wordpress 4.5.3
- Fix: show_iframe_loader, hide_part_of_iframe and hide_page_until_loaded are now working properly. hide_part_of_iframe elements are now hidden until the iframe is loaded. (Pro)    
- Fix: Accordeon menu does now work again. In the next version this will change anyway. I only use this than for the advanced tab as default as this page is simply too big.

= 7.2.1 =
- Fix: sandbox attribute was not use as one file was not commited to the latest build. Now it works fine agian.
- Fix: Zoom and php < 5.3 does not define a needed variable. Now this is defined for older php versions. (Pro)

= 7.2 =
- New: {timestamp} can be used in the src. It adds a timestamp which can be used to avoid caching of iframes. (Pro)
- New: element_to_measure is now available on the external workaround tab directly-> Additional height (Pro)
- New: With postMessage you can now mix https and http in the external workaround. (Pro)
- Fix: Resize later on the external workaround is now working again. (Pro)
- Fix: Some themes have iframe hidden with opacity:0 and visibility:hidden. I now set this for the given iframe that the iframe is visible. 
- Fix: Additional height fields are only allowing numbers without a unit.
- Fix: Improved documentation

= 7.1 =
- New: "Show only a part of an iframe" does now also support zoom and scrollbars. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe/show-only-a-part-of-an-iframe-zoom#e43  for a working example. (Pro)
- New: "Show only a part of an iframe" does now also support zoom and the loading indicator. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe/show-only-a-part-of-an-iframe-zoom#e43  for a working example. (Pro)
- New: "Hide part of an iframe" supports now a bottom/right option e.g. hide_part_of_iframe="b34,r9,100%,85,#ffffff". See www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/hide-a-part-of-the-iframe#e44 for a working example (Pro)
- New: "Hide part of an iframe" supports now the include of html and in there also the support of shortcodes. See www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/hide-a-part-of-the-iframe#e44 for a working example (Pro)
- New: Support for vw and vh for width and height. 
- New: window.postMessage is now also supported as communication channel to send the needed data from the iframe to the parent for the external workaround. (Pro)
- New: Support for WP multi sites if only the domain does differ between the sites. Check the "Support WP multisite" parameter on the "External workaround" tab. (Pro)
- New: Check the shortcode! You can now enable on the introduction tab that the shortcode is showing an error message if unknown attributes are used.
- New: Layer files have now the placeholder {src}. This can be used to e.g. create a "Go to the page" link. (Pro)
- New: The orientationchange event is now triggering a recalculate of the iframe. So e.g. auto height is done again if you rotate your ipad. 
- New: Browscap version 6013 lite 15th Mar 2016 is now included. (Pro)
- New: Support for Wordpress 4.5
- Fix: Replaced depricated get_currentuserinfo() with wp_get_current_user()
- Fix: The external workaround config with ?config_id=example was looking in the old place of the main plugin directory for the config files. But they moved to the advanced-iframe-custom folder and now the ai_external.js is loading the files from there. Please save the config once that the path is updated.
- Fix: browser detection documentation was wrong: tablets -> tablet (Pro)
- Fix: The hardcoded px was removed at "show only a part of the iframe" show_part_of_iframe_width and show_part_of_iframe_height. If you now specify % e.g. 100% and not 100%px is rendered (but browsers treated 100%px as 100% anyway)

= 7.0.3 =
- New: Improved the documentation of the external workaround and added 2 new FAQs.
- Fix: printError was not defined for the site. If the ai_external.js can not be saved the plugin fails. Now a message is shown properly. 

= 7.0.2 =
- New: Support of document.domain. Sub domains can than be configured like local domains. See the new section in the external workaround section. 
- New: The documentation of the external workaround was improved. A new step how to use the external workaround was added. 
- New: Browscap version 6011 lite 24th Dec 2015 is now included. (Pro)
- Fix: The display of external file where improved. Too long file names behaved strange before.
- Fix: When creating/removing files the correct tab is now selected again. 
- Fix: The marker of the top tabs when a filtering was done was marking the wrong tabs when the introduction tab is the last tab.
- Fix: External file list where not hidden during filtering
- Fix: Resize by element resize could not be saved to the external workaround file if resize for the same domain was not enabled. Now the text field is not readonly in this case anymore. (Pro)
- Fix: The whitelist for parameters do not contain ? and & anymore. Parameters are now encoded if they exist.

= 7.0.1 =
- New: New section "Open iframe in layer" (Pro)
- New: Search filter does now highlight the tab headers where findings are.
- Fix: Create and remove of layer files where creating still the older header_*.html files. Now layer_*.html files are created/removed how they should. (Pro)  

= 7.0 =
- New: 'Show only a part of the iframe' does now also support zoom (Pro). See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe/show-only-a-part-of-an-iframe-zoom
- New: Header support for "Show the iframe as layer". Headers can be created inside the administration and height and position (top/bottom) can be specified. See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/scrolling-on-ipad-and-iphone
- New: "Change link targets and show the iframe as layer" has now the option 100% and 96% for the layer size.
- New: "Change link targets and show the iframe as layer" does now evaluate shortcodes in the header file.
- New: "Change link targets and show the iframe as layer" has now the option to use {id} inside the header file to use the same header file several times. {id} will be replaced with the id of the iframe.
- New: {href} is added as placeholder for the src attribute. There you get the full url that you see in the address bar url encoded. 
- New: ai_external.js is now generated if it does not exist. So even after an update without saving the administration will not break the external workaround anymore.
- New: Scrolling support on ipad and iphone for normal iframes with loader icon and lazy loading (Pro). See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/scrolling-on-ipad-and-iphone 
- New: Scrolling support on ipad and iphone for "Show only a part of the iframe" with scrollbars (Pro). See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe#e5 with an ipad!
- New: Scrolling support on ipad and iphone for "Change link targets and show the iframe as layer" (Pro). See http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/change-links-targets#e34 on an ipad 
- New: Auto height for wrapped iframes. Inner iframes can now delegate a height change to the outer iframes. Works on the same domain and if you use the external workaround. See http://www.tinywebgallery.com/blog/advanced-iframe/demo-advanced-iframe-2-0/same-domain-wrapped-auto-height
- New: Browscap version 6010 lite 20th Nov 2015 is now included.
- New: Html attribute sandbox is supported now: http://www.w3schools.com/tags/att_iframe_sandbox.asp
- New: resize_delay can now be set in the administration for the external workaround also.
- New: The free version can now show the pro administration settings.
- New: In the administration not possible items in the auto height section are grayed out.
- New: Scrolling default is now "none" and not "auto" anymore as this makes more sense.
- New: If you enable responsive iframes in the external workaround auto height is enabled internally as this is needed!
- New: Scripts are not loaded anymore if you include content directly.
- New: Several code optimzations and extraction of the main logic to several files.
- New: ' in the url is now decoded internaly properly because Wordpress does encode this value with values what kills the src of the iframe. 
- Fix: px where added again for the loader container if px where specified as width already. Now only px is added if it does not exist.
- Fix: "Reserve iframe space" was not grayed out when main parameter was disabled.
- Fix: include_html was printed directly and not returnd from the function it should have been. Now the text is shown at the right place (Pro).
- Fix: When removing custom files the correct tab is now preseleted!
- Fix: removed overflow:auto; at the wrapper div. You can add this if needed at the parameter additional_styles_wrapper_div

= 6.5.6 =
- New: Wordpress 4.4 is supported
- Fix: Icons where not aligned anymore because of changes in the css of Wordpress.

= 6.5.5 =
- Fix: Some spaces at the end of advanced-iframe-main-read-config.php gave a  "headers already sent by" warning on some setups.

= 6.5.4 =
- Fix: include_url was brocken. Now it works fine again.

= 6.5.3 =
- Fix: https iframe on https did show an error message which is wrong. Now the message only is shown if http pages are included to https pages.

= 6.5.2 =
- Fix: Wordpress updates where not shown because of a missing return value. Now only the ones for advanced iframe are blocked as it should be.

= 6.5.1 =
- New: Wordpress 4.2.4 is supported
- Fix: An anonymous function was used which is supported since php 5.3. But older php versions failed in the administration. Now the "old" way is used and the plugin is now compatible with older php versions again.

= 6.5 =
- New: Tab navigation in the administration.
- New: The browser detection is now supporting "browser" and "desktop" also. 
- New: include_html was added which does write the given string directly instead an iframe. This is helpful e.g. for a fallback text/link when the browser detection is used and a device is detected where your content does not work or should not be shown. Now you can print a message or display an image there.
- New: Browscap version 6005 lite 7th June 2016 is now included. It is much smaller than the previous version which had a lot of overhead which where not needed here. (Pro)
- New: A button for full screen iframes was added it does set all the required styles and settings for a fullscreen iframe (Pro). 
- New: hide_content_until_iframe_color was added. This hides the parent content with the given color until the iframe is loaded. This is very usefull if you want to use a fullscreen iframe and the parent content should never be shown (Pro).
- New: css calc() support for width and height. This makes it possible to do calcuations like 100%-200px at the height and the width. See http://caniuse.com/#feat=calc for browser support (Pro).
- New: Added a few new sections for better usability of the administation: "Zoom", "Lazy load" and "Url parameters"
- New: Above the editor a button next to the media button was added to include a basic iframe shortcode. For later versions it is planned that the attributes for the button can be specified in the config.
- New: When zoom is used the browser detection is needed. This does need a lot of memory. A temp file is now created before the check and removed after the check. So if the check does now fail because of a memory crash this file is not deleted and the script does not do the check. You only loose the IE8 support for zoom. The temp file is advanced-iframe-custom/browser-check-failed.txt and if you get mory memory you can remove this file to enable the check again (Pro). 
- New: A message is shown if you include a http iframe to a https page as many major browsers do block this. Therefore it does not make sense to use this setup.
- New: The ai_external.js has now a timestamp. There you can then see if you use the latest version or maybe see a cached one!
- New: The resize on element resize script is overwritten if jQuery is loaded after the ai_external.js script again. Now a warning is shown (Pro)
- New: user info and user meta of the src attribute have now an additional help which settings are available (Pro)
- New: The generate shortcode button does now only generate the include_* values if they are set as the other settings are ignored than. 
- Fix: show_part_of_iframe_x and show_part_of_iframe_y are now always added to the generated iframe code if show_part_of_iframe is enabled (Pro).
- Fix: Added overflow:auto to the wrapper div. This fixed the problem returning a height of 0 of the wrapper element in chrome if the elements inside are floating: http://webdesignerwall.com/tutorials/css-clearing-floats-with-overflow 
- Fix: The % info text of the area selector was improved. 
- Fix: [ and ] in the security error message where not html encoded. This lead to a strange error message if another plugin is wrapped around and calling do_shortcode. 
- Fix: The max-width for the sourounding div when responsive iframes are enabled where missing a ; which leads to a invalid css value.
- Fix: Added missing links in the documentation at the responsive iframe settings.
- Fix: auto_zoom_by_ratio was missing in the generated shortcode.
- Fix: position:absolute is now optional (use_zoom_absolute_fix = "true") as it seems is also causes problems at other layouts. 

= 6.4 =
- New: The first video tutorial is avilable: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-video-tutorials 
- New: Links to external pages can be opened in a simple fullscreen lightbox (Pro). See example 32 on http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/change-links-targets
- New: The iframe url can be returned back to parent and added to the url (Pro). This url does than also load this iframe content again. Supported on the same domain and with the external workaround (Pro). See: http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/add-iframe-url-to-parent
- New: hide_part_of_iframe does now support links (Pro)! Therefore it is now possible to add areas with custom links. See the updated demo 8 on http://www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/hide-a-part-of-the-iframe  
- New: hide_part_of_iframe elements are hidden until the page is loaded to avoid that this blocks are shown without the iframe. this is only enabled if hide until loaded is enabled! 
- New: Support for pdfs inside the iframe (Pro). If you include a pdf google doc is used to include the pdf. This solution  looks the same on all browsers. If you want to use the native pdf renderer of the browser/your system add NATIVE: before the url. Like NATIVE:http://www.example.com/pdf.pdf  DEMO NEEDED
- New: All attributes from the user info and the user meta are available as replace parameters in the src attribute (Pro). 
- New: Extract parts from the parent url and adds it to the iframe url (Pro). See urlpath at the description of "Url"
- New: Extract parts from the parent query and add it to the iframe url (Pro). See query at the description of "Url"
- New: Parameters from POST requests are alse extracted. If GET and POST are given the GET parameter is used.
- New: Add css directly to an iframe on the same domain (Pro). This does than support !important also. 
- New: Add css and js files to the iframe for the same domain or with the external workaround (Pro)
- New: Custom css and js files can be created/viewed/edited/removed in the administration.
- New: Marker css classes are added to the body and the first level of the elements in the iframe: add_css_class_iframe (Pro). It is than now possible to apply different changes to different pages in the iframe.
- New: You can now reload the iframe in a certain interval: reload_interval (Pro)
- New: A filter for the settings does now exist. Simply type for a search term and only the matching settings are shown. 
- New: An icon is now shown which settings are saved to the ai_external.js
- New: An icon is now shown where a special demo does exist. 
- New: The dependeny to jQuery is now optional. This avoids double loading of jQuery if e.g. your theme does load jQuery not the wordpress way.
- New: ai.js is only loaded if the advanced_iframe shortcode is on the page. "Include ai.js in the footer" has to be set to true to enable this.
- New: Auto zoom by ratio if the height cannot be measured but the ratio is known (Pro).
- New  allowfullscreen is now also available in the free version as this is a default html element.
- New: Settings link on the plugin page
- New: External history page http://www.tinywebgallery.com/aip-history.htm 
- New: Improved documentation
- New: A text is shown if ai_extenal.js file does not exist yet.
- New: Width in the external workaround is now first checking if a width style is set and only if not found the measuring is done. This can solve problems with hidden elements! Also if you hide elements you should also set the width to 0 to avoid such issues.If you use the internal hide function hidden elements are set to a height and width of 0.
- New: Tested up to Wordpress 4.2.2
- Fix: The plugin does now work fine with the royal theme from codecanyon again! The theme and the plugin where using the same variable for the options. Now a unique variable name is used.
- Fix: Changed && in the Javascript to two if statements to avoid problems with wptexturize and other page optimizing plugins 
- Fix: Browser detection for mobile and android was not working because in the detection file e.g. isMobileDevice was changed to ismobiledevice. Now this works fine again ;). (Pro)
- Fix: Show one element on the local domain was fixed.
- Fix: aiResizeIframeHeightById has now a a try catch to detect configuration errors. 
- Fix: position:absolute is added to the iframe at zoom to fix issues on some pages.

= 6.3.7 =
- Testet with 4.2.3

= 6.3.6 =
- Testet with 4.2.2

= 6.3.5 =
- Testet with 4.1.2
-	Fix: Layout fix in the administration of the free version only. 

= 6.3.4 =
- Fix: Advanced iframe was not working together with the Royal theme as they where using a same variable name. Now they work fine together.

= 6.3.3 =
- Fix: Measuring of width does now check if it is > 1 as some full responsive sites do return such a value that is not valid. 

= 6.3.2 =
- Fix: Show one element on the local domain was fixed.
- Fix: Measuring of width does now check if it is > as some full responsive sites do return such a value that is not valid. 

= 6.3.1 =
- New: index.htm files where added to all directories to prevent directory listings if you server does allow this.
- Fix: Standalone version was working fine in the standalone folder. The internal path handling was improved to make is easier to include it anywhere. (Pro)  
- Fix: !important was removed for hide elements because this was is not supported in jQuery.
- Fix: All iframe attributes are trimmed now. This avoids errors because of spaces e.g. at the beginning of the src.
- Fix: Better error message if the security key was not found because of wrong quotes.
- Fix: > could not be used in the shortcode for jQuery patterns. You can now use ## which internaly converted to > 
- Fix: Save button was jumping when you try to click it on some browser. The css is fixed now.
- Fix: Menu anchor fixed 
- Fix: Save caused a php warning when normal save buttons where used.

= 6.3 =
- New: Standalone version. See standalone/readme.html for details (Pro)
- New: Config files for the external workaround. See example 7 (Pro) 
- New: Create, view, edit and remove of config files added (Pro)
- New: hide elements does now set !important when settings display:none as some themes have display:block !important somewhere.
- New: Internal version check as Wordpress only checks the free version. (Pro)
- New: Help for Advanced iFrame Pro Widget added. (Pro)
- New: Reset to default settings was added. (Pro)
- New: Settings are shown in the main menu now also. Can be turned off in the config.
- New: Element_to_measure is now also supported when resized later or the width is used. (Pro)
- New: "Hide until loaded" does now use css instead of jQuery to hide the iframe. 
- New: strtolower was added when css styles are applyed on the same domain. This fixes problems if e.g. important is written Important which is invalid!   
- New: Improved documentation
- New: Hide elements is now used with !important because depending on your css the elements are not hidden otherwise. Make sure to save the config as this is also implemented for the external workaround.
- New: Automatic resize 500 ms later in the external workaround if the measured height is > 10.000 as this is either an error or a huge page where the delay does not matter. (Pro)
- Fix: Resize is only done if the detected height is > 10. Everything below is expected that the height is not measured correctly. (Pro)
- Fix: Many typos fixed
- Fix: show_one_element_only has # already set on the same domain. The # was removed as in the external workaround the # was not set.
- Fix: hide_page_until_loaded_external is now not connected to hide_page_until_loaded anymore. Now hide_page_until_loaded has be set to false if hide_page_until_loaded_external is used. But the old way has caused that misconfguration was showing a blank page.  

= 6.2 =
- New: {adminemail} is available as replace parameters in the src attribute (Pro).
- Fix: modifyOnLoad... was not always rendered because show_part_of_iframe_next_viewports_hide was not checked properly
- Fix: The browser detection is now only used when the browser detection or zoom is used. browser detection needs quite some memory. So this reduces the memory usage of the plugin if these features are not used (Pro).  

= 6.1 =
- New: {userid}, {username}, {useremail} are available as replace parameters in the src attribute (Pro).
- Fix: {} in the src field could not be saved in the administration because of Wordpress esc_url. Now this works there too. It was always working in the shortcode attribute src.
- Fix: In the external workaround the resizeLater function had a hardcoded id (advanced_iframe). When using a different one the callback with the size failed.
- Fix: Browser detection needs at least php 5.3. Now a warning is shown when you don't have at least php 5.3 (Pro).
- Fix: Plugin needed at least php 5.3 because the browser detection was used always to detect IE8. Now this check is only done if php 5.3 is available (Pro).
- Fix: ?version=<internal version> it attached to js and css of the administration like in the site.

= 6.0 =
- New: Auto zoom. This feature does automatically calculates the needed zoom factor to fit the iframe page into the parent page. Works on the same and with the external workaround. Shortcode auto_zoom. See example 29-31 (Pro). 
- New: Lazy load with hidden elements. So this is a very good alternative for hidden tabs. See example 28 (Pro).
- New: You can define the element that should trigger manual lazy load. See example 25 (Pro).  
- New: Static save button in a transparent footer (Pro).
- New: Support for an alternative shortcode. So you can use e.g. "iframe" also if you want to switch/upgrade from iframe to advanced iframe pro. Please note: If you enable this, the security key is NOT checked anymore (Pro).
- New: Support for the BBCode [iframe]url[/iframe] (Pro). 
- New: Automatic resize 500 ms later in the external workaround if the measured height is < 10 (Pro)
- New: You can define the element you want to measure + a offset for fix content. This is sometimes needed for some themes where e.g. chrome returns 0 as height (Pro).
- New: You can set additional styles to the wrapper div like overflow:auto with additional_styles_wrapper_div in the external workaround (Pro).
- New: Show only one element does now also clones attached event listeners (Pro).
- New: Browser detection now supports tablets, android, androidtablet and browsecap version 5033, 23 Sep 2014 was added (Pro).
- Fix: transparent border of the wrapper div removed as it is not needed anymore. 
- Fix: Improved documentation for hide_part_of_iframe how to make a read only iframe (Pro).
- Fix: $include_scripts_in_footer and $add_css_class_parent or store_height_in_cookie could cause a config error. You need to set include_scripts_in_footer to false if you want to use add_css_class_parent or store_height_in_cookie. Now this is added to the documentation and also the script does not fail anymore if you do set this wrong. 
- Fix: Added stripcslashes() when reading parameters when magic_quotes_gpc is on. 
- Fix: Removed the detection at resize if the iframe width has changed because at auto zoom the detection was wrong (Pro).

= 5.10 =
- New: Resize on element resize is now supported. This enables you to resize the iframe if e.g. the content of the iframe changes because of div which expands. This feature is more powerfull and easier to configure than the "Resize on click/Ajax" setting and is also supported for the external workaround (Pro)
- New: Trigger loading manually (enable_lazy_load_manual) added. Now lazy loaded iframes can be shown manually. See the lazy load demo for an example. (Pro)
- New: Write css as script directly to the header. See the description (Write css directly) of the external workaround for details. (Pro)
- New: Add a css style to each parent element of the iframe (add_css_class_parent) to be able to find and modify the parent even when no styles exist or classes are not used exclusively. (Pro) 
- New: Support of shortcodes in the src attribute. Please note. Needed encodings have to be done in the shortcode! (Pro) 
- New: Dynamic src parameters. You can define placeholders for the site, host and port. This is useful if you e.g. have a multidomain install where the host is dynamic (Pro) 
- New: Add the id to the url of the iframe (pass_id_by_url). This feature adds the id of the iframe to the iframe url. The id is than extracted on the iframe and used as value for the callback to find the right iframe on the parent side.add_css_class_parent (Pro)        
- New: additional_js_iframe - The ai_external.js can also write additional Javscript. This is loaded at the end of ai_external.js. The advantage using this is that the Javascript is only loaded if the page is inside the iframe and is not loaded when accessed directly. (Pro)
- New: additional_js_file_iframe - The ai_external.js can also load an additional Javascript file. This is loaded at the end of ai_external.js. The advantage using this is that the file is only loaded if the page is inside the iframe and is not loaded when accessed directly. Please note that the file is loaded asynchronously. (Pro)
- New: URL forward parameters (url_forward_parameter) does now also support ALL as setting. This does simply add all incoming parameters to the iframe url.
- New: Scripts can now be loaded to the footer (include_scripts_in_footer). This is now default.
- New: Height is only sent by the external workaround when the height does change and not everytime a configured event is triggered.
- New: Browscap version 5030 lite 17th June 2014 is now included. (Pro)
- Fix: All css/Javascript are now loaded to header/footer for all Wordpress versions the wordpress way
- Fix: Improved documentation.

= 5.9 =
- New: Lazy load of iframes with treshold and fadein. Iframes can be loaded after the parent is done or the iframe is shown in the viewport! (Pro)
- New: Better input validation. Avoids configuration errors.
- New: Wordpress 3.9.1 is supported
- New: An alternative to the eval function is now used in Javascript to improve security and speed.
- New: Browscap version 5029 lite 8th May 2014 is now included. (Pro) 
- Fix: Code improvements found with the plugin checker plugin
- Fix: Hidden tabs was not working because of the responsive iframe feature. Now both do work independant again. (Pro)
- Fix: Improved shortcode generator (Pro) 
- Fix: Width is now measured without the extra space (which was 0 by default anyway ;))
- Fix: Whitelist for params was extended by :,? and &
- Fix: Wrong default for Set Iframe height by ratio (iframe_height_ratio) was fixed (Pro) 
- Fix: loader icon and responsive iframe do now work together! (Pro)

= 5.8 =
- New: Shortcode generator! In the administration you can now generate a default independent shortcode from the current settings.(Pro)
- New: Set Iframe height by ratio (iframe_height_ratio). This can be used to make resonsive iframes where the content has a certain ratio like swf's, videos... (Pro)
- New: Wordpress 3.9 is supported 
- New: map_parameter_to_url does now also support that an url can be passed to the iframe directly. So show=http%3A%2F%2Fwww.tinywebgallery.com would open http://wwww.tinywebgallery.com inside the iframe. (Pro)
- New: Browscap version 5027 lite 24th Apr 2014 is now included. (Pro)  
- Fix: Documentation improvements.

= 5.7 =
- New: html attribute allowfullscreen is now supported.
- New: Zoom and auto height with the external workaround with several iframes on the same page is now supported.
- New: Tested with Wordpress 3.8.2
- Fix: Advanced iframe pro can now be used together with php-browser-detection. Before using both where leading to a function redeclaration. 
- Fix: Functions of the old and new workaround had the same name with different parameters. Now this functions have different names and also work properly with several iframes on the same page. 

= 5.6 =
- New: Support that the height of responsive iframes is automatically set to the new content height. This means that if you resize the parent page and the iframe width changes, the height of the iframe is adopted automatically like when loaded the first time! Please note that both pages (parent and iframe page) needs to be responsive. Please also read the blog entry about responsive iframes. (Pro)
- New: Read-only iframes: hide_part_of_iframe does now support also %. This means together with color "transparent" you can create read-only iframes! See the pro demo. (Pro)
- New: No output (except conguration errors) is done in the script function anymore. Everything is returned as return value. 
- New: Added updated browsecap.ini: 5024 (2nd March 2014) from browscap.org
- Fix: Improved documentation in the administration.
- Fix: Loader is now displayed better for small iframes. See example 2. 
- Fix: additional_css and additional_js are now again supported as shortcode attribute if Wordpress >= 3.3. Before WP 3.3 you can only set this feature in the administration. 

= 5.5 =
- New: Support to resize to content height for iframes on hidden tabs (Pro). Works with e.g. Tabby Responsive Tabs and Post UI Tabs. This can also be used for simple hidden divs which opens e.g. on a mouse click or accordeon menus. Please read the documentation in the settings for details. 
- New: Loading of css and Javascript in the admin section is it only loaded when needed. 
- New: Loading of the additional css and Javascript in the page are also only loaded when you use Wordpress >= 3.3. Before the files are always included to all pages because wordpress api does not allow this differently. 
- New: Added updated browsecap.ini: 5023 (2nd Feb 2014)
- Fix: Loader css was always written even if not configured. Now only when this feature is enabled.
- Fix: renamed internally is_browser to ai_is_browser to avoid problems when e.g. a theme does define is_ie()...
- Fix: Area selector does now look good again. 

= 5.4 =
- New: The default security key is now based on the AUTH_KEY of Wordpress and the current time. Please change the default key to your own to increase security. 
- New: Zoom of iframe content: This feature is supported for the following browsers: IE8-11, Firefox, Chrome, Safari, Opera. Older versions of IE are not supported. Please test all the browsers you want to support with your page because not all pages do look good in a zoomed mode! This feature is also part of the demo. So you can test your browsers there! (Pro)
- New: iframe loading icon. You can now show a loding icon while the iframe is loaded. If you use the "hide until loaded feature" your users does see that something is happening. You can use your own image (loader.gif) with a size of 66x66 px by replacing the one in the img folder (Pro).
- New: Accordeon menu (Pro).
- New: Map parameter/value pairs to urls. You can specify parameter/value/url tripples which are used the following way.  If the parent has ?parameter=value than the url of the setting is used as src for the iframe (Pro).
- New: Reading of browser detection file is cached (Pro).
- New: Improved padding and better handling in expert mode (Pro)
- New: Input text fields have now dynamic sizes. So if you enlage the screen they should always fit. Textfields with numbers only are now much shorter as the numbers there never get longer.
- Fix: Administration was not shown properly on MAC.
- Fix: Expert mode description fixed (Pro)
- Fix: Error message when saving a special setting was fixed 

= 5.3 =
- New: Browser detection added. You can now specify browser specific iframes. This is important especially for the "Show only part of the iframe" where browser differences of a few pixels can matter. Also mobile, iphone, ipad can be detected. A modified version of php-browser-detection is used which uses browscap.org as data! Important: Read the documentation at "Browser detection" in the plugin how to use this! (Pro) 
- New: Change link targets on the parent that they open inside the iframe. Shortcode: change_parent_links_target (Pro)
- New: Change link targets inside the iframe if the iframe page is on the same domain or if you can use the external workaround. Shortcodes: change_iframe_links, change_iframe_links_target (Pro)
- New: Redirect direct access of the iframe page to the parent page. Does also add existing parameter to the parent url (Pro)
- New: url forward parameter mapping. Wordpress has many reserved word in the url so they cannot be used. Now parameters can be mapped to a different one in the confiuration. so e.g. name is e.g. a reserved word an cannot be used. using ainame|name in the configuration will forward 'ainame=hallo' as 'name=hallo' to the iframe (Pro). 
- New: "Show only a part of an iframe" has now a new setting $show_part_of_iframe_style where a style can be set for e.g. a border (Pro).
- New: Integrated jQuery help (Pro)
- New: Improved error messages
- Fix: Area selector does now select 'Yes' at the "Show only part of the iframe" when data is chosen (Pro).
- Fix: Area selector does now enable all disabled radio elements when data is chosen (Pro).  
- Fix: Additional spaces are removed when used in jQuery attributes 
- Fix: Typos in the descriptions where fixed.
- Fix: ereg was replaced by preg_match to avoid deprecated warnings with php < 5.3

= 5.2 =
- New: New feature "Hide a part of the iframe". Extra layers can be placed over the iframe. This enables you to e.g. hide a logo or even place your own logo on an iframe. See the pro demo for examples (Pro)
- New: Try catch is now used at features which could fail when features for the same domain are used on external domains. Now the exceptions are catched and logged to the console.   
- New: A dynamic auto id is now only generated if several iframes are detected on one page.
- New: Tested with Wordpress 3.8
- New: Improved documentation  
- Fix: At grayed out radios only the first radio box was grayed out - now all are disabled

= 5.1 =
- New: vertical and/or horizontal scrollbars in the pro feature "Show only part of the iframe" solution are possible. This makes it possible to include e.g. a whole inner content with scrollbars but without showing e.g. the header of the external page. See the pro version for a working example.
- New: Resize can now be delayed. This helps if the onload event is fired but the page is not completely build. This feature is also possible in the external workaround of the pro version.
- New: Administration options are grayed out if not available because of another setting.
- New: Expert mode. If you enable this the description is only shown if you click on the setting. You see more settings at once but only one description at once. Use this if you are common with the settings. 
- New: id is now set automatically if a src is set in the shortcode but no id is set. This avoids problems if people  forgets to set the id ;).  
- Fix: The external workaround does now hide the html element until all modifications are done. Before only the body was hidden which was showing the background in some browsers. If you still see a background for a very short time please look into ai_external.template.js - line 53

= 5.0.1 =
- New: Support of the external height workaround when the iframe is already in an iframe. Now the correct iframe is used and not the top one anymore.
- Removed not used file.

= 5.0 =
- New: 'Show only a part of the iframe' has now a graphical area selector where yu can simply select the area you want to show with the mouse! (Pro)
- New: Improved external workaround: It can now be configured to work with different settings for different iframes  
- New: Improved documentation of the external workaround
- New: Improved external workaround: "Modify the content of the iframe if the iframe page is on the same domain" is now supported in the workaround and can be configured for different domains (Pro).
- New: Improved external workaround: The iframe can be hidden until al external modifications are done!
- New: Improved external workaround: The same page can now be included into different wordpress installations. Only one configration is allowed here. For multiple configurations you need the onclude the different scripts depending on the parent with php. 
- New: Tested with Wordpress 3.7.1
- New: Fully compatible with php >= 5.3
- New: "Scroll to top" does now not need a workaround anymore and the setting was moved to a different section where it makes more sense.
- New: Whitelist for url foreward parameters. If the value does only contain parameters on the whitelist than the value is not encoded anymore. Whitelist: @a-zA-Z0-9À-ÖØ-öø-ÿ|)( minus and space.
- New: Support of the external workaround for IE7 and IE8
- New: Quickstart guide added to the administration page of advanced iframe pro.
- New: When the external workaround is set to true settings which only work on the same domain are disabled.
- New: Improved handling of the show_part_of_iframe_... feature. Not needed dependencies at configuration where removed. This enables more flexibility here! (Pro) 
- Fix: show_part_of_iframe_x and show_part_of_iframe_y where switched. now show_part_of_iframe_x = left and show_part_of_iframe_y = top (Pro)
- Fix: \n where removed from the code because some other plugins converted them to br which where adding unwanted empty lines.
- Fix: Hide elements until loaded is now again the last step of the onload values.
- Fix: em tags where replaced by p tags in the administration. Copying em tags where copying the em tags to the editor as well which could cause invalid shortcodes  
- Fix: "Restart the viewports from the beginning after the last step": old shortcode was in the description show_part_of_iframe_do_update -> show_part_of_iframe_next_viewports_loop (Pro)

= 4.2 =
- New: Improved external workaround. The body in the wrapper is not copied as simple string anymore (This removes e.g jQuery stuff that is attached in the DOM) but a div object is created where the child notes of the body are attached to. Thanks to Jason.
- New: Improved external workaround. The wrapper div is now only rendered if needed. 

= 4.1.1 =
- Fix: Hidden administration fields caused a notice when saving.

= 4.1 =
- New: New attribute use_shortcode_attributes_only. Enables not to use any of the defaults and only the settings specified as attributes.
- New: Fields could only be made empty by entering a space. Now simply removing the text does work again.
- Fix: minor fixes 
- Fix: Code and documentation improvements

= 4.0.1 =
- Fix: Fixed a copy and paste error where wrong shortcodes where used in the documentation 

= 4.0 =
- New: Pro version on codecanyon.net.
- New: Show only a part of an iframe - works on different domains! (Pro)
- New: Change the visible part of the iframe after each onload event (Pro)
- New: Open a new url after the last step (Pro)
- New: Open the iframe in a new tab or as parent after the last step (Pro)
- New: Widget. You can now include the shortcode also as widget (Pro)
- New: New attribute 'style'. You can now set any style directly at the iframe. The recommended way is to use a css file and the attribute class.

= 3.6 =
- New: Tested with Wordpress 3.6
- New: Updated example file.

= 3.5 =
- New: The external workaround was rewritten. It does now work by only including a script to the iframe page. 
- New: The resize of the external workaround does now also make the iframe smaller.
- New: The Javascript on the external page does only modifies the page if it is included in an iframe.
- New: advanced-iframe is now also possible instead of advanced_iframe as shortcode
- New: If you set scrolling to 'Not rendered' the attribute scrolling is not rendered to the iframe. This makes it possible to set this with css and make the scrollbar responsive as well.

= 3.4.3 =
- New: Added a section in the FAQ how to use the advanced iframe multiple times on one installation

= 3.4.2 =
- New: the style for the site is now inline because it was only one style. Now no extra css is loaded anymore.

= 3.4.1 =
- Fix: Url of the support page was not starting with http and therefore not working
- Fix: Url where checked with the sanizize functions of Wordpress. This was too strict. Now esc_url() is used and stuff like %E5 does work as well in the url.

= 3.4 =
- New: Basic support for multiple advanced iframes on one page. All generated public Javascript functions have now the id included in the name. Cookies and additional_height are not supported yet because they are used as global variables in the external js file. 
- New: additional_height has to be a number. px or % are now automatically removed to avoid Javascript errors.
- Fix: forewarded parameters are now urlencoded. e.g. keyword=gr%E5%E5sen is now passed properly.

= 3.3 =
- Fix: the height was not detected properly with firefox and some doctypes. Now a more advanced way to determine the height is used which works now fine for Firefox as well.

= 3.2 =
- New: Paid support. Because some settings are quite advenced I now also offer paid support.
- New: Iframe checker: Checks the headers if a page can be included into an iframe.
- New: Javascript onload solution hiding the iframe until the content is loaded. 
- Fix: some shortcodes in the administration where not correct because of copy and paste.

= 3.1 =
- New: Javascript onload solution for resizing the iframe dynamically to the width of the content. 
- New: Resize on AJAX events. Works for jQuery and direct XMLHttpRequest on the same domain. 
- New: Resize on click. You can specify the elements and a timeout when the resize should happen.
- New: Scroll position is now saved and restored after the resize.
- Fix: iFrames are now also made smaller at content resize in all browsers

= 3.0 =
- A page or part of a page can now be embedded directly to the page with jQuery if the page is on the same domain. See the  new section 'Include content directly'.
- Tested with Wordpress 3.5.1

= 2.1 =
- Show only a specifiy part of the page in the iframe if the pages are on the same domain.

= 2.0.2 =
- Tested with Wordpress 3.5

= 2.0.1 =
- Fix: The included footer was causing an Javascript error on non advanced iframe pages. Now I check if the function does exist.   

= 2.0 =
- New: onload attribute added
- New: Javascript onload solution for scolling the parent page to the top.
- New: Javascript onload solution for resizing the iframe dynamically to the height of the content. 
- New: Javascript solution for the scrolling and resizing that works cross domain as well.  
- New: Hide elements/modify css modify speed was dramatically improved. The function is now not called only in the ready event of JQuery but also directly before the footer. This causes that you don't see the changes most of the time anymore!
- New: An additional css file can be added to the parent page.
- New: An additional Javascript file can be added to the parent page.
- New: Hide areas inside iframe if the pages are on the same domain.
- New: Modify css styles inside iframe if the pages are on the same domain to e.g. change the width of the content area. 

= 1.5 =
Support for src values that are hotlinked by the editor. 
Fixed the typo in the doumentation. in securitykey sometimes the r was missing 

= 1.4 =
Documentation updated
New: id and name attribute added

= 1.3.2 =
Improved the help
Fix: css was not loaded because old css name was used

= 1.3.1 =
Fix: Improved error message if a &nbsp; is in the shortcode instead of a normal space.

= 1.3 =
Fix: content_id,content_styles,hide_elements was always used from the config even when a shortcode was given. Now the shortcode is used as well.

= 1.2 =
Fix: The src was not working in the shortcode. I missed to rename this parameter when making this plugin more generic.

= 1.1 =
Fix: The iframe was always printed first. Now it is printed exacly where the shortcode is inserted.

= 1.0 =
First version.