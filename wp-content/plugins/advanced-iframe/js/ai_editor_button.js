/**
 *  This file is used to initialize the editor button above the editor. 
 */
var securitykey = aiButtonSettings.securitykey;  
var additionalSettings = aiButtonSettings.additionalSettings;
 
jQuery(document).ready(function(){
	 jQuery("#insert-iframe-button").click(function() {
	 if (securitykey !== '') {
	   send_to_editor("[advanced_iframe securitykey=\"" + securitykey +  "\""  + additionalSettings + "]");
	 } else {
	   send_to_editor("[advanced_iframe" + additionalSettings + "]");
	 }
	 return false;
	 });
});
