<?php
defined('_VALID_AI') or die('Direct Access to this location is not allowed.');
/**
 *  Print the donation details depending on the version type
 */
 
 
function testContentCallback() {
	echo "content";
}
 
function printQuickstartGuide($closedArray) {	
aiPostboxOpen("id-options-quickstart", "Quick start guide", $closedArray);  

_e('<p>
      <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-video-tutorials" target="_blank" id="vid" class="button-primary">Show me the quickstart video</a>    
</p>

<p>To include a web page to your page please check the following things:</p>
<ul>
<li>- Check if your page you want to include is allowed to be included:<br />&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/free-iframe-checker">www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/free-iframe-checker</a>!</li>
<li>- Check if the iframe page and the parent page are one the same domain. www.example.com and text.example.com are different domains!</li>
<li>- Can you modify the page that should be included?</li>
</ul>
<p>Most likely you have one of the following setups:</p>
<ol>
<li>Iframe can be included and you are on the same domain: All features of the plugin can be used.</li>
<li>iframe can be included and you are on a different domain: See the <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-comparison-chart" target="_blank">feature comparison chart</a> and the <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-features-availability-overview" target="_blank">features availability overview</a>. To resize the content to the height/width or modify css you <strong>need to modify the remote iframe page</strong> by adding one line of Javascript to enable the "<a id="external-workaround-link" href="#xss">External workaround</a>".</li>
<li>iframe cannot be included: You cannot include the content because the owner does not allow this. </li>
</ol>', 'advanced-iframe');

_e('<p>To enter a simple iframe please go to the administration and follow the instructions on the basic settings tab. There you can either use a basic shortcode and set the settings in the administration or overwrite the settings directly in the shortcode. Please also read the <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-faq" target="_blank">FAQ</a> and look at the <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/demo-advanced-iframe-2-0" target="_blank">free</a> and <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-pro-demo" target="_blank">pro examples</a>.</p>', 'advanced-iframe');

_e('<p>Advanced users that have their own server might also setup a reverse proxy if the iframe page is on a different domain and cannot use the "<a id="external-workaround-link" href="#xss">External workaround</a>". See <a href="//www.tinywebgallery.com/blog/using-a-reverse-proxy-to-enable-all-features-of-advanced-iframe-pro" target="_blank">this blog</a> for details.<br />', 'advanced-iframe');
_e('If you mix http and https read <a href="//www.tinywebgallery.com/blog/iframe-do-not-mix-http-and-https" target="_blank">this blog</a>. Parent https and iframe http is not supported by any browser anymore!</p>', 'advanced-iframe');

	  aiPostboxClose();	
} 
 
function printDonation($devOptions, $evanto, $closedArray) {
if ($evanto) {
      echo '<br/>
      <div>
      <div id="icon-options-general" class="icon_ai">
      <br>
      </div><h2 class="options-h2">';
      _e('Advanced iFrame Pro - Quickstart guide, plugin options, widget, vote for the plugin on codecanyon', 'advanced-iframe');
    echo '</h2>';
// Registration    
	aiPostboxOpen("id-options-registration", "Registration", $closedArray);  
    echo '<table class="form-table hide-print">';
    printPurchaseCodeInput($devOptions, __('Purchase code', 'advanced-iframe' ), 'purchase_code', __('Please enter your purchase code here to finish the registration. The purchase code is currently optional to not break any existing installations. Make sure you enter your code asap. to be prepared for the next step when the purchase code is mandatory.', 'advanced-iframe'));
	echo '</table>';
    aiPostboxClose();
	
	printQuickstartGuide($closedArray);

    _e('<h3 class="hide-print">Plugin options</h3>', 'advanced-iframe');
	
// Display
    aiPostboxOpen("id-options-display", "Display options", $closedArray);  
    echo '<table class="form-table hide-print">';
    printTrueFalse(false,$devOptions, __('Show this section as last tab', 'advanced-iframe'), 'donation_bottom', __('<strong class="move-bottom">You can show this tab as last tab after you have read it. Then the basic tab is shown first.</strong>', 'advanced-iframe'));
	printTrueFalse(false,$devOptions, __('Enable expert mode', 'advanced-iframe'), 'expert_mode', __('If you enable the expert mode the description is only shown if you click on the label of the setting. You see more settings at once but only one description at once. Also the padding between the table rows are reduced a lot. So you see a lot of more settings on one screen. Use this if you are common with the settings.', 'advanced-iframe'), 'false');
	printTrueFalse(false,$devOptions, __('Show plugin in main menu', 'advanced-iframe'), 'show_menu_link', __('Show the "Advanced iFrame Pro" menu link also in the main menu. If set to "False" it is only shown in the settings menu.', 'advanced-iframe'), 'true');
	printTextInput(false,$devOptions, __('Editor button', 'advanced-iframe'), 'editorbutton', __('With this setting you can add an "advanced iframe" button to the text editor of Wordpress. The button does add the shortcode with the current security code if set + the settings you define. You can use any setting from the administration. By default src,width,height is used. The securitykey is additionally rendered if you specify one. If you leave this setting empty the button is not shown.', 'advanced-iframe')); 
    echo '</table>';
    aiPostboxClose();

// Debug/validation	
    aiPostboxOpen("id-options-debug", "Validation of iframes/Debug console", $closedArray);  
    echo '<table class="form-table hide-print">';  
	printTrueFalse(false,$devOptions, __('Check shortcode', 'advanced-iframe'), 'check_shortcode', __('<strong class="move-bottom">If you enable this the plugin does check if the shortcode attributes are known. You will find typos, wrong quotes and missing spaces. It does not check the values! The only reason this is not enabled by default is to make sure that old shortcodes don\'t show a warning after an update! I strongly recommend to enable this setting! You can also add ?aiEnableCheckShortcode=true to the url to do a check dynamically. By default this check is done when you do a preview of your page.</strong>', 'advanced-iframe'), true); 
    printDebug($devOptions, __('Debug Javascript', 'advanced-iframe'), 'debug_js', __('You can enable that most messages from the Javascript console are shown in a debug div which shown at the bottom of the page. This is very useful if you have problems on Android or IOS because there it is quite hard to get on the infos displayed in the Javascript log. Important: You need to use the external workaround with postMessage set to debug(!) (see the external workaround tab) if you also want to get the messages from the page in the iframe! Also the current user agent, the headers and a basic iframe check of the first found iframe are printed into the debug log. Click on the debug area to enlarge and shrink it. You can also append ?aiEnableDebugConsole=true/false to the url to enable/disable the debug console. Shortcode attribute: debug_js="no/bottom"  ', 'advanced-iframe'));
	echo '</table>';
    aiPostboxClose();
 
// Check/Monitoring 
      aiPostboxOpen("id-options-check-monitoring", "Checking/Monitoring of iframes", $closedArray);  
      echo '<table class="form-table hide-print">';    
      printTrueFalse(false,$devOptions, __('Check Url on load', 'advanced-iframe'), 'check_iframe_url_when_load', __('By default the url on the basic tab is checked if it can be included into an iframe. Some servers do block this feature and the administration does fail then. If this is the case the plugin does disable this check and "Check iframes on save" automatically. You can enable this feature again if you allow curl calls on your server.', 'advanced-iframe'), true);
      printAllWarningFalse($devOptions, __('Check iframes on save', 'advanced-iframe'), 'check_iframes_when_save', __('You can define if you show errors only, errors and warnings or if iframes are not checked at all at save of a post/page. Some servers do block this feature and you get a blank editor page on save once. If this is the case the plugin does disable this check automatically. You can enable this feature again if you allow curl calls on your server.', 'advanced-iframe') );
      printTrueFalse(true,$devOptions, __('Check all iframes once a day', 'advanced-iframe'), 'check_iframe_cronjob', __('You can automatically check all iframes of your site once a day. IF you upgrade from an older version please deactivate and active the plugin once to get the cronjob setup properly! The same function like  on the "Basic" tab -> Url -> "Check all iframes" is triggered here. Be aware that default Wordpress cronjobs are triggered by the user that hits the next execution time and therefore this user has to wait until this check is done! Please go to the administration if you get an e-mail for a full check! If the checks of your iframes takes longer than 5 sec. I recommend to switch to a native cronjob if possible. Google for "Wordpress cronjob replace" and also add your hoster! Because native cronjobs can not be created everywhere and also often depends on your package. To test cronjobs you can e.g. use the plugin "WP Control" where you can simply execute this cronjob.', 'advanced-iframe'));
      printNumberInput(true,$devOptions, __('i-20-Check batch size', 'advanced-iframe'), 'check_iframe_batch_size', __('This setting defines how many urls are checked in parallel. This is system dependent (number of available file descriptors) and can vary between 50 and over 1000. Some blog entries talk about a default of 256. The default of 100 is used to be on the save side.', 'advanced-iframe'));  
	  printTextInput(true,$devOptions, __('i-20-Check iframe cronjob email', 'advanced-iframe'), 'check_iframe_cronjob_email', __('You can define an alternative e-mail the iframe status check is sent to. If you leave this field empty the admin e-mail from "Settings -> Email Address" is used. You can define several e-mails separating them by ",".','advanced-iframe'));
      printTrueFalse(true,$devOptions, __('i-20-Send e-mail always', 'advanced-iframe'), 'check_iframe_cronjob_email_always', __('Get a report by e-mail always or only on case of a problem.', 'advanced-iframe'), 'true');
      echo '</table>';
      aiPostboxClose(); 
 
// Other iframe solutions 
      aiPostboxOpen("id-options-other-iframe", "Support for other iframe solutions", $closedArray);  
      echo '<table class="form-table hide-print">';  
      printTrueFalse(false,$devOptions, __('Replace iframe tags with advanced iframe shortcode', 'advanced-iframe'), 'replace_iframe_tags', __('When you set this to Yes all existing iframes on your site will be replaced by the advanced iframe shortcode dynamically. So you get all the power of the plugin without exchanging all your old iframes. The iframes are parsed and the main attributes (src, width, height, id, name, class, style) are used in the shortcode + all settings you make in the administration. Be aware that they all get the same additional settings! So only use this if this works for you. You can of course if you need only some iframes to be different replace them manually. If you have several iframes on the same page make sure that if they have an id, the id is unique.', 'advanced-iframe'), false);  
	  printTextInput(false,$devOptions, __('Alternative shortcode', 'advanced-iframe'), 'alternative_shortcode', __('You can define an alternative shortcode the plugin should evaluate. By default you can use: advanced_iframe and advanced-iframe. This is e.g. useful if you chance/upgrade from iframe to advanced iframe (pro). Simply insert e.g. "iframe" in the text field. Most if the parameters do already match! Make sure to deactivate the other plugin that used the shortcode. With using iframe also the BBCode [iframe]url[/iframe] is supported. IMPORTANT: If you use this, security codes are NOT checked anymore. So anyone who can e.g. write a post can also insert an iframe!', 'advanced-iframe'));
	  echo '</table>';
      aiPostboxClose();	   
	   
// Share part of your content  
      aiPostboxOpen("id-options-share", "Share part of your content", $closedArray);  
      echo '<table class="form-table hide-print">';  
	  printTrueFalse(true,$devOptions, __('Enable content filter', 'advanced-iframe'), 'enable_content_filter', __('This feature does not render an iframe. It gives you the option to filter the content of your page by an id. So you can offer parts of your page that then can be included into any iframe. You only need to specify the id of the element you want to show with the parameter ?ai-show-id-only=id. If you only specify this parameter the whole page is loaded and then with Javascript all other elements are hidden. If you add ai-server-side=1 to the url the content is filtered on the server side but this only works for elements which are in the content area because everything else depends on the template. By default overflow (scrolling) is hidden inside the iframe. If you like that scrollbars are shown if needed add &ai-show-overflow=1 to the url. Also check "Add ai_external.js local" as this actually the even more powerful solution but more complicated to setup. So try what fits best to your needs! Also the height of the content is sent to the parent by a post message. Please see the <a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-content-filter">demo</a> how you can use this and code you need to include to use this the optimal way.', 'advanced-iframe'), 'false', '//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-content-filter');
      printAiExternalLocal(false,$devOptions, __('Add ai_external.js local', 'advanced-iframe'), 'add_ai_external_local', __('The setting does add the ai_external.js to your own site. This enables you to provide parts of your site into an external iframe or use the "<a id="external-workaround-link" href="#xss">External workaround</a>" for the same domain. This is similar to "enable_content_filter" where you can filter parts of your page. The advantage of this solution is that you can use all css modifications and auto height of this solution. Also resize of element resize does work here. Also this works on included links if they still stay on the page. The disadvantage is that it is more complicated to setup then "enable_content_filter" and only one configuration is supported automatically. Also the height of the content is sent to the parent by a post message. If you like to include the script only to a single page use the shortcode [ai_advanced_js_local] to your page. Then the script will be included to your footer. You can even add custom settings like described on the "<a id="external-workaround-link" href="#xss">External workaround</a>" tab by adding a script to the content. You can enable this for the site, the admin pages or both. Please see the <a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-add-ai_external-js-local">demo</a> how you can use this and code you need to include to use this the optimal way.', 'advanced-iframe'), 'false','//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/share-content-from-your-domain-add-ai_external-js-local');
      echo '</table>';
      aiPostboxClose(); 
	  
// Technical   
      aiPostboxOpen("id-options-technical", "Technical options", $closedArray);  
      echo '<table class="form-table hide-print">';   
      printTrueFalse(false,$devOptions, __('Include ai.js in the footer', 'advanced-iframe'), 'include_scripts_in_footer', __('By default the needed Javascript files are included at the footer. So you can include jQuery also at the footer. If you like/need it in the header set this value to false. This can be the case if the iframe loads very fast and the needed callbacks are not available. Please check the browser console (F12). If you see errors that advanced iframe methods are not found: Set this to false. The ai.js has also to be in the footer if it should only be loaded when the shortcode is on the page. This setting cannot be set as shortcode! There is an additional shortcode attribute called include_scripts_in_content="true". This is only needed in the special case if you use the page with content only (like using the plugin "Show Content Only" with "Content + Styles" mode). Then ai.js is directly rendered before the iframe. See demo <a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/demo-advanced-iframe-2-0/same-domain-wrapped-auto-height">wrapped auto height</a>.', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Load jQuery as dependency', 'advanced-iframe'), 'load_jquery', __('By default jQuery is loaded as dependency. If you have a theme or another plugin that does not stick to the Wordpress way to load the scripts you might have to disable the dependency. This avoids that jQuery is loaded again and other plugins do maybe not work anymore.', 'advanced-iframe'), true);   
      printTrueFalse(false,$devOptions, __('Fix WordPress 5.5 page parameter change', 'advanced-iframe'), 'remove_page_param_from_query', __('In Wordpress 5.5 the page parameter returns with a 301 redirect if not used the WordPress way. Setting this to true does allow to still use the parameter page in the url with non numerical characters. The recommended way is to not use page as parameter in the url at all. ', 'advanced-iframe'), 'false');

  	 echo '</table>';
      aiPostboxClose();
	  
// Security/delete
	  aiPostboxOpen("id-options-delete", "Security/Delete options", $closedArray);  
      echo '<table class="form-table hide-print">'; 
	  printTrueFalse(false,$devOptions, __('Allow shortcode attributes', 'advanced-iframe'), 'shortcode_attributes', __('Allow to set attributes in the shortcode. All of the attributes can be overwritten in the shortcode if you set \'Yes\'. Otherwise the settings you specify here are used.', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Use shortcode attributes only', 'advanced-iframe'), 'use_shortcode_attributes_only', __('All iframes you use in your pages use the administration. With shortcode attributes you can overwrite these settings. When you use several iframes with different settings this can lead to unexpected behavior because you do not see the whole configuration in the shortcode. By setting this option to true only the parameters defined as attributes are used. You can set this for a single iframe as well with the shortcode attribute use_shortcode_attributes_only="true". Shortcode attribute: use_shortcode_attributes_only="true" or use_shortcode_attributes_only="false"', 'advanced-iframe'));
     
      $user = wp_get_current_user();
      if ( in_array( 'administrator', (array) $user->roles ) ) {
          printRoles($devOptions, __('Minimum user role', 'advanced-iframe'), 'roles', __('You can define the minimum user role a user needs to use the advanced iframe plugin. This limits the access to the administration, the editor button and if a user can edit a page with a advanced iframe shortcode. If a page with an advanced iframe is detected and the rights are not sufficient an error message is displayed and the user can not edit the page! A user with insufficient rights still can add the shortcode if he has the security code! This settings only works optimal for the 5 default user roles as it depends on the order of roles! So please check if this settings works for you if you have additional roles! Default restrictions means that the administration is only shown for administrators and the editor button for everyone who can edit a post/page. This setting can only be changed by an administrator!', 'advanced-iframe'), 'contributor');
      }
      printTrueFalse(false,$devOptions, __('Remove data when plugin is deleted', 'advanced-iframe'), 'delete_options_db', __('You can remove also all settings in the database when deleting the plugin. By default this is not enabled because updating the pro version is done by deleting the old version and installing the new version again. So please only set this setting to true if you completely want to remove the plugin. Also delete the "Advanced iFrame custom folder" plugin after you have deleted the main plugin.', 'advanced-iframe'), false);  	  
      echo '</table>';
      aiPostboxClose();
	  
  // echo '<p>';
  // echo '<p class="button-submit">
  //      <input class="button-primary" type="submit" name="update_iframe-loader" value="';
  //    _e('Update Settings', 'advanced-iframe');
  // echo '"/></p>';
  
   _e('<h3>Widget, vote</h3>', 'advanced-iframe');
  
    aiPostboxOpen("id-options-widget", "Advanced iFrame Pro Widget", $closedArray);  
    _e('The pro version also does offer a widget where you can include the iframe. The usage is really simple. Go to Appearance -> Widgets and insert the shortcode you would normally put into a page into the text field of the "Advanced iFrame Pro Widget".', 'advanced-iframe' );
    aiPostboxClose();	   
	
	aiPostboxOpen("id-options-vote", "Vote for the plugin", $closedArray);  
	_e('Thank you for getting Advanced iFrame Pro at Codecanyon.<br/>', 'advanced-iframe' );
	_e('Please feel free to leave an item rating from your items download page if you haven\'t already done so.</p>', 'advanced-iframe' );
	_e('<p>Please get in contact with me if you have problems because most of the issues are easy to solve. But at least tell me what you did not like so I can improve this. Also make sure that you took a look at the quick start guide to make sure the feature you like can be used!</p>', 'advanced-iframe' );
	aiPostboxClose();	   


} else {

echo '<br/>
<div>
    <div id="icon-options-general" class="icon_ai">
    <br>
  </div><h2 class="options-h2">';
  _e('Advanced iFrame - Upgrading to Advanced iFrame Pro, quick start guide, plugin options', 'advanced-iframe');
  echo '</h2>';
   aiPostboxOpen("id-options-pro", "Upgrading to Advanced iFrame Pro", $closedArray);  
  _e('<p>Advanced iframe is <strong>free for personal use</strong> and the Pro version a bargain for your business. The personal version does already contain many of the cool features of the Pro version. It has a limit of 10.000 views a month without a notice text which should normally not been hit by a personal website.</p>', 'advanced-iframe' );

echo '<div id="first" class="signup_account_container signup_account_container_active" style="cursor: default;" title="';
_e('Free - For personal and non-commercial sites', 'advanced-iframe');
echo '">
			<div class="signup_inner">
				<div class="signup_inner_plan">';
        _e(' ', 'advanced-iframe');
        echo '</div>
				<div class="signup_inner_price">
					<strong>';
          _e('FREE', 'advanced-iframe');
          echo '</strong>
				</div>
				<div class="signup_inner_header">';
        _e('For personal and non-commercial sites', 'advanced-iframe');
        echo '</div>
				<div class="signup_inner_desc">';
        _e('10.000 views/month without notice*', 'advanced-iframe');
        echo '</div>
				<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=paypal%40mdempfle%2ede&item_name=advanced%20iframe&item_number=Support%20Open%20Source&no_shipping=0&no_note=1&tax=0&currency_code=EUR&lc=EN&bn=PP%2dDonationsBF&charset=UTF%2d8" target="_blank" id="plan_button_pro" class="signup_inner_button">';
         _e('Donate with Paypal', 'advanced-iframe');
        echo '</a>
			</div>
    </div>
      ';
echo '
   <div  class="signup_account_container signup_account_container_active" style="cursor: default;" title="';
   _e('Pro - For commercial, business and professional sites', 'advanced-iframe');
   echo '">
			<div class="signup_inner">
				<div class="signup_inner_plan">';
        _e(' ', 'advanced-iframe');
        echo '</div>
				<div class="signup_inner_price">
					<strong>PRO</strong>
				</div>
				<div class="signup_inner_header">';
        _e('For commercial, business and professional sites', 'advanced-iframe');
        echo '</div>
				<div class="signup_inner_desc">';
        _e('+ <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-comparison-chart" target="_blank">Many additional features!</a><br />&nbsp;', 'advanced-iframe');
        echo '</div>
				<a href="https://1.envato.market/OdoBZ" target="_blank" id="plan_button_pro" class="signup_inner_button">';
        _e('Get pro at Codecanyon', 'advanced-iframe');
        echo '</a>
			</div>
		</div>
';
echo '
       <div id="last" class="signup_account_container signup_account_container_active" style="cursor: default;">
			<div class="signup_inner">
				<div class="signup_inner_plan">';
        _e('Pro Version Benefits', 'advanced-iframe');
        echo '</div>

				<div class="signup_inner_desc">
           <ul class="pro"><li>';
           _e('<a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/show-only-a-part-of-the-iframe" target="_blank">Show/Hide specific areas of the iframe</a> if the iframe is on a different domain<br /><a target="_blank" href="//www.mdempfle.de/examples/configurator/advanced-iframe-area-selector.html">Show the graphical selector</a></li><li><a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/widgets" target="_blank">Widget support</a>, <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/change-links-targets" target="_blank">change link targets</a></li><li>External workaround supports <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/external-workaround-auto-height-and-css-modifications" target="_blank">iframe modifications</a> and <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/responsive-iframes" target="_blank">responsive iframes</a></li><li><a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/browser-detection" target="_blank">Browser dependant settings</a>, <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/lazy-loading" target="_blank">lazy load</a></li><li>No view limit, <a href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/zoom-iframe-content" target="_blank">zoom</a>, <a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-pro-standalone">standalone version!</a></li><li><a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-pro-demo">See the pro demo</a><li><a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/advanced-iframe-comparison-chart">Compare versions for all features</a>', 'advanced-iframe');
           echo '</li></ul>
        </div>
			</div>
		</div>

<div class="clear"></div><br />
';

_e('<p>* After 10.000 views/month the iframe is still working but below the iframe a small "powered by" notice with a link to the pro version is shown. If you hit this limit and you qualify for the free license please contact <a href="//www.tinywebgallery.com/en/about.php" target="_blank">me</a> to get a version with a higher limit.<br/>If you use the Advanced iFrame on a non personal website please first test the plugin carefully before buying. After that it is quick and painless to get Advanced iFrame Pro. Simply get <strong><a target="_blank" href="https://1.envato.market/OdoBZ">Advanced iFrame Pro on CodeCanyon</a></strong> and be pro in a few minutes!</p>', 'advanced-iframe');

_e('<p><strong>Current status</strong>: ', 'advanced-iframe');
echo get_option('default_a_options') / 100 . ' % of views for this month used.';
_e('</p>', 'advanced-iframe');
aiPostboxClose();	   


printQuickstartGuide($closedArray);

 _e('<h3 class="hide-print">Plugin options</h3>', 'advanced-iframe' );
// Display
      aiPostboxOpen("id-options-display", "Display options", $closedArray); 
      echo '<table class="form-table">';
      printTrueFalse(false,$devOptions, __('Show this section as last tab', 'advanced-iframe'), 'donation_bottom', __('<strong class="move-bottom">You can show this tab as last tab after you have read it. Then the basic tab is shown first.</strong>', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Show the administration of the pro version and test many features in the preview', 'advanced-iframe'), 'demo', __('<strong class="move-bottom">You can enable the administration of the pro version to see the available features there. Everything except the additional buttons and additional settings on the options tab are shown. All features which can be configured by a shortcode will work in the preview now! So you can really test most of the features before you buy! The additional features of the external workaround with the ai_extenal.js will NOT work as here because the code is not included and only available in the download from codecanyon! All pro features have a blue label or differences are described in the documentation!</strong>', 'advanced-iframe'));
      printTextInput(false,$devOptions, __('Editor button', 'advanced-iframe'), 'editorbutton', __('With this setting you can add an "advanced iframe" button to the text editor of Wordpress. The button does add the shortcode with the current security code if set + the settings you define. You can use any setting from the administration. By default src,width,height is used. The securitykey is additionally rendered if you specify one. If you leave this setting empty the button is not shown.', 'advanced-iframe')); 
      printTrueFalse(false,$devOptions, __('Show plugin in main menu', 'advanced-iframe'), 'show_menu_link', __('Show the "Advanced iFrame" menu link also in the main menu. If set to "False" it is only shown in the settings menu.', 'advanced-iframe'), 'true');
      echo '</table>';
      aiPostboxClose();
 
 // Debug/validation	
      aiPostboxOpen("id-options-debug", "Validation of iframes/Debug console", $closedArray);  
      echo '<table class="form-table hide-print">';  
      printTrueFalse(false,$devOptions, __('Check shortcode', 'advanced-iframe'), 'check_shortcode', __('<strong class="move-bottom">If you enable this the plugin does check if the shortcode attributes are known. You will find typos, wrong quotes and missing spaces. It does not check the values! The only reason this is not enabled by default is to make sure that old shortcodes don\'t show a warning after an update! I strongly recommend to enable this setting! You can also add ?aiEnableCheckShortcode=true to the url to do a check dynamically. By default this check is done when you do a preview of your page.</strong>', 'advanced-iframe'), true);
      printDebug($devOptions, __('Debug Javascript', 'advanced-iframe'), 'debug_js', __('You can enable that most messages from the Javascript console are shown in a debug div which shown at the bottom of the page. This is very useful if you have problems on Android or IOS because there it is quite hard to get on the infos displayed in the Javascript log. Important: You need to use the external workaround with postMessage set to debug(!) (see the external workaround tab) if you also want to get the messages from the page in the iframe! Also the current user agent, the headers and a basic iframe check of the first found iframe are printed into the debug log. Click on the debug area to enlage and shrink it. You can also append ?aiEnableDebugConsole=true/false to the url to enable/disable the debug console. Shortcode attribute: debug_js="no/bottom"  ', 'advanced-iframe'));         
     echo '</table>';
     aiPostboxClose();
 
 // Check/Monitoring 
      aiPostboxOpen("id-options-check-monitoring", "Checking/Monitoring of iframes", $closedArray);  
      echo '<table class="form-table hide-print">';    
      printTrueFalse(false,$devOptions, __('Check Url on load', 'advanced-iframe'), 'check_iframe_url_when_load', __('By default the url on the basic tab is checked if it can be included into an iframe. Some servers do block this feature and the administration does fail then. If this is the case the plugin does disable this check and "Check iframes on save" automatically. You can enable this feature again if you allow curl calls on your server.', 'advanced-iframe'), true);
      printAllWarningFalse($devOptions, __('Check iframes on save', 'advanced-iframe'), 'check_iframes_when_save', __('You can define if you show errors only, errors and warnings or if iframes are not checked at all at save. Some servers do block this feature and you get a blank editor page on save once. If this is the case the plugin does disable this check automatically. You can enable this feature again if you allow curl calls on your server.', 'advanced-iframe') );
      echo '</table>';
      aiPostboxClose(); 
 
 // Other iframe solutions 
      aiPostboxOpen("id-options-other-iframe", "Support for other iframe solutions", $closedArray);  
      echo '<table class="form-table hide-print">';  
      printTrueFalse(false,$devOptions, __('Replace iframe tags with advanced iframe shortcode', 'advanced-iframe'), 'replace_iframe_tags', __('When you set this to Yes all existing iframes on your site will be replaced by the advanced iframe shortcode dynamically. So you get all the power of the plugin without exchanging all your old iframes. The iframes are parsed and the main attributes (src, width, height, id, name, class, style) are used in the shortcode + all settings you make in the administration. Be aware that they all get the same additional settings! So only use this if this works for you. You can of course if you need only some iframes to be different replace them manually. If you have several iframes on the same page make sure that if they have an id, the id is unique.', 'advanced-iframe'), false); 
	  echo '</table>';
      aiPostboxClose();	
 
// Technical   
      aiPostboxOpen("id-options-technical", "Technical options", $closedArray);  
      echo '<table class="form-table hide-print">';   
      printTrueFalse(false,$devOptions, __('Include ai.js in the footer', 'advanced-iframe'), 'include_scripts_in_footer', __('By default the needed Javascripts are included at the footer. So you can include jQuery also at the footer if you like. If you like/need it in the header set this value to false. Before Wordpress 3.3 jQuery is needed in the header if you want to use lazy-loading! The ai.js has also to be in the footer if it should only be loaded when the shortcode is on the page. This setting cannot be set as shortcode! There is an additional shortcode attribute called include_scripts_in_content="true". This is only needed in the special case if you use the page with content only (like using the plugin "Show Content Only" with "Content + Styles" mode). Then ai.js is directly rendered before the iframe. See demo <a target="_blank" href="//www.tinywebgallery.com/blog/advanced-iframe/advanced-iframe-pro-demo/demo-advanced-iframe-2-0/same-domain-wrapped-auto-height">wrapped auto height</a>.', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Load jQuery as dependency', 'advanced-iframe'), 'load_jquery', __('By default jQuery is loaded as dependency. If you have a theme or another plugin that does not stick to the Wordpress way to load the scripts you might have to disable the dependency. This avoids that jQuery is loaded again and other plugins do maybe not work anymore.', 'advanced-iframe'), true);
	  printTrueFalse(false,$devOptions, __('Fix WordPress 5.5 page parameter change', 'advanced-iframe'), 'remove_page_param_from_query', __('In Wordpress 5.5 the page parameter returns with a 301 redirect if not used the WordPress way. Setting this to true does allow to still use the parameter page in the url with non numerical characters. The recommended way is to not use page as parameter in the url at all. ', 'advanced-iframe'), 'false');
      echo '</table>';
      aiPostboxClose();
	   
 // Security/delete
	  aiPostboxOpen("id-options-delete", "Security/Delete options", $closedArray);  
      echo '<table class="form-table hide-print">'; 
	  printTrueFalse(false,$devOptions, __('Allow shortcode attributes', 'advanced-iframe'), 'shortcode_attributes', __('Allow to set attributes in the shortcode. All of the attributes can be overwritten in the shortcode if you set \'Yes\'. Otherwise the settings you specify here are used.', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Use shortcode attributes only', 'advanced-iframe'), 'use_shortcode_attributes_only', __('All iframes you use in your pages use the administration. With shortcode attributes you can overwrite these settings. When you use several iframes with different settings this can lead to strange unexpected because you do not see the whole configuration in the shortcode. By setting this option to true only the parameters defined as attributes are used. You can set this for a single iframe as well with the shortcode attribute use_shortcode_attributes_only="true". Shortcode attribute: use_shortcode_attributes_only="true" or use_shortcode_attributes_only="false"', 'advanced-iframe'));
      printTrueFalse(false,$devOptions, __('Remove data when plugin is deleted', 'advanced-iframe'), 'delete_options_db', __('You can remove also all settings in the database when deleting the plugin. By default this is not enabled because updating the pro version is done by deleting the old version and installing the new version again. So please only set this setting to true if you completely want to remove the plugin. Also delete the "Advanced iFrame custom folder" plugin after you have deleted the main plugin.', 'advanced-iframe'), false);  

	  echo '</table>';
      aiPostboxClose();
      
   //echo '<p class="button-submit">
   //   <input class="button-primary" type="submit" name="update_iframe-loader" value="';
   //   _e('Update Settings', 'advanced-iframe');
   //echo '"/>
   // </p>';
}
}
?>