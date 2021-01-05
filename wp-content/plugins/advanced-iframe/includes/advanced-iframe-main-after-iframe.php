<?php
defined('_VALID_AI') or die('Direct Access to this location is not allowed.');
/**
 *  Creates the Javascript which is executed after the iframe is created
 */
$html .= '<script type="text/javascript">';
$html .= 'var ifrm_'.$id.' = document.getElementById("'.$id.'");';
$html .= 'var hiddenTabsDone'.$id.' = false;
function resizeCallback'.$id.'() {';
if (!empty ($tab_hidden)) {
  $split_hidden_array = explode(',', $tab_hidden);
  $hidden_counter = 0;
  $html .= 'if (!hiddenTabsDone'.$id.') { ';
  foreach ($split_hidden_array as $split_hidden) {
      if ($hidden_counter++ === 0) {
          $html .= 'jQuery("' . $split_hidden . '").css("position", "static").hide().css("visibility", "visible");';
          // for one level resize works mu
          $html .= 'hiddenTabsDone'.$id.' = false;';
      } else {
          $html .= ';jQuery("'. $split_hidden .'").hide();';
          $html .= 'hiddenTabsDone'.$id.' = true;';
      }
  }
  $html .= '}';
}
$html .= '}';

$html .= 'function aiChangeUrl(loc) {';
    if ($add_iframe_url_as_param === 'remote') {
        $html .= '  aiChangeUrlParam(loc,"'.$map_parameter_to_url.'","'.$src_orig.'","'.$add_iframe_url_as_param_prefix.'");';
    }
$html .= '}';


if ($store_height_in_cookie === 'true') {
   $html .= 'if (window.aiUseCookie) { aiUseCookie(); }';
}


if ($show_part_of_iframe === 'true' && (!empty ($show_part_of_iframe_new_window) ||
    !empty ($show_part_of_iframe_new_url) || !empty ($show_part_of_iframe_next_viewports) ||
    ($show_part_of_iframe_next_viewports_hide === 'true'))) {
   $html .= 'var countAlert'.$id.' = 0;
      var maxStep'.$id.' = getViewPortCount'.$id.'();
      function modifyOnLoad'.$id.'() {
            if (maxStep'.$id.' === countAlert'.$id.') {';
            if ($show_part_of_iframe_next_viewports_loop === 'true') {
                $html .= 'jQuery("#ai-div-'.$id.'").css("width","'.$this->addPx($show_part_of_iframe_width).'");
                    jQuery("#ai-div-'.$id.'").css("height","'.$this->addPx($show_part_of_iframe_height).'");
                    jQuery("#ai-div-'.$id.'").removeClass();
                    ';
                    $fixId = ($fixChrome65) ? 'ai-div-inner-' : '';
                $html .= 'jQuery("#'.$fixId.$id.'").css("left","-'.$this->addPx($show_part_of_iframe_x).'");
                    jQuery("#'.$fixId.$id.'").css("top","-'.$this->addPx($show_part_of_iframe_y).'");
                    countAlert'.$id.' = 0;';
            } else if ($show_part_of_iframe_next_viewports_hide === 'true') {
                $html .= 'jQuery("#'.$id.'").hide();';
            } else {
                $reload_url = $src;
                if (!empty($show_part_of_iframe_new_url)) {
                    $reload_url = $show_part_of_iframe_new_url;
                }
                if (!empty ($show_part_of_iframe_new_window)) {
                   if  ('_blank' === $show_part_of_iframe_new_window) {
                       // reload in new window
                       $html .= 'window.open("'.$reload_url.'");';
                   } else if ('_top' === $show_part_of_iframe_new_window) {
                       // reload in parent window
                       $html .= 'location.href = "'.$reload_url.'";';
                   } // else nothing to do
                }
            }
     $html .= '} else if (countAlert'.$id.' > 0)  { // viewport change!
              setNewViewPort'.$id.'(countAlert'.$id.'-1);
          }
          countAlert'.$id.'++;
      }
      function getViewPortCount'.$id.'() {
        var variable = "' . $show_part_of_iframe_next_viewports . '";
        if (variable != "") {
        var elements = variable.split(";");
            return elements.length+1;
        } else {
            return 1;
        }
      }
       function setNewViewPort'.$id.'(num) {
        var variable = "' . $show_part_of_iframe_next_viewports . '";
        var elements = variable.split(";");
        var paramList = elements[num];
        var params = paramList.split(",");
        if (params.length != 4) {
            alert("Please check the view port settings. Exact 4 variables are needed");
        } else {
            // modify the css with jquery.
            jQuery("#ai-div-'.$id.'").css("width",params[2] + "px");
            jQuery("#ai-div-'.$id.'").css("height",params[3] + "px");
            // set a unique class for each viewport
            jQuery("#ai-div-'.$id.'").removeClass().addClass("ai-viewport-" + num);';
            $fixId = ($fixChrome65) ? 'ai-div-inner-' : '';           
  $html .= 'jQuery("#'.$fixId.$id.'").css("left","-" + params[0] + "px");
            jQuery("#'.$fixId.$id.'").css("top","-" + params[1] + "px");
        }
      }';
 }

 if ($auto_zoom === 'same' ) {
       $html .= 'function zoomOnLoad'.$id.'() {
               aiAutoZoom("'.$id.'","' . $enable_responsive_iframe . '","'.$auto_zoom_by_ratio.'");
           }';
 }
 
$reloadOnResize = $reload_interval != '' && $this->ai_startsWith($reload_interval, 'r');

 if ($enable_responsive_iframe === 'true' || $show_part_of_iframe_zoom !== 'false' || !empty($remove_elements_from_height) || $reloadOnResize) {
     $html .= 'var recalculateIframeResize'.$id.' = 0;
        var recalculateIframeOrientationchange'.$id.' = 0;
        var aiWindowWidth = 0;
		function recalculateIframe'.$id.'() {
          clearTimeout(recalculateIframeResize'.$id.');
          clearTimeout(recalculateIframeOrientationchange'.$id.');';
          if ($enable_lazy_load === 'true') {
             $html .= 'ifrm_'.$id.' = document.getElementById("'.$id.'");';
          }	  
		  if ($this->ai_startsWith($reload_interval, 'r')) {
	          $reload_interval_time = substr($reload_interval, 1);
			  $html .= ' if (jQuery(window).width() != aiWindowWidth) {
			  aiWindowWidth = jQuery(window).width();';
			  if ($this->ai_endsWith($reload_interval, 'p')) {
			      $reload_interval_time = substr($reload_interval_time, 0, -1);	  
				  $html .= '
				  setTimeout( function() {
					  location.reload();
				  }, '.$reload_interval_time.');';
			  } else {
				  $html .= '
				  setTimeout( function() {
					  jQuery( "#'.$id.'" ).attr( "src", function ( i, val ) { return val; })
				  }, '.$reload_interval_time.');';
			  }
			  $html .= '}';
          } else if (!empty($iframe_height_ratio)) {
              $html .= '  aiResizeIframeRatio(ifrm_'.$id.', "'.$iframe_height_ratio.'");';
          } else  if ($auto_zoom === 'same') {
             $html .= 'aiAutoZoom("'.$id.'","' . $enable_responsive_iframe . '","'.$auto_zoom_by_ratio.'");';
          } else if ($onload_resize === 'true') {
              $html .= 'aiResizeIframe(ifrm_'.$id.', "'.$onload_resize_width.'","'.$resize_min_height.'");';
          } else  if ($auto_zoom === 'remote') {
             $html .= 'aiAutoZoomExternalHeight("'.$id.'",ai_iframe_width_'.$id.',ai_iframe_height_'.$id.',"' . $enable_responsive_iframe . '" );';
          } else if ($show_part_of_iframe_zoom !== 'false' ) {
              $html .= 'aiAutoZoomViewport("'.$auto_zoom_div.$id.'","' . $show_part_of_iframe_zoom . '");';
          } else if (!empty($remove_elements_from_height)) {
			  $html .= 'aiRemoveElementsFromHeight("' . $id . '","'.$height.'","'.$remove_elements_from_height.'");';
          } 
     $html .= '}  
        function initResponsiveIframe'.$id.'() {
          jQuery(window).resize(function() {
			 recalculateIframeResize'.$id.' = window.setTimeout("recalculateIframe'.$id.'()",100);
          });
          if (window.addEventListener) {
            window.addEventListener("orientationchange", function() {
               recalculateIframeOrientationchange'.$id.' = window.setTimeout("recalculateIframe'.$id.'()",100);
            }, false);
          }
        }
        aiReadyCallbacks.push(initResponsiveIframe' . $id . ');';
}



if ($reload_interval != '') {
	if (!$this->ai_startsWith($reload_interval, 'r')) {
		if ($this->ai_startsWith($reload_interval, 't')) {
		  // setTimeout
		  $reload_interval = substr($reload_interval, 1);
		  $html .= 'setTimeout(';
		} else {
		  $html .= 'setInterval(';  
		}
		$html .= ' function() {
			jQuery( "#'.$id.'" ).attr( "src", function ( i, val ) { return val; })
		}, '.$reload_interval.');';
    }
}

$html .= '</script>';


// Load the additinal Javascripts for loady-load and resize + the configuration.
$newer_version = $include_scripts_in_content === 'false' && !isset($aip_standalone) && version_compare(get_bloginfo('version'), '3.3') >= 0 ;
if ($enable_lazy_load === 'true') {
  if ($newer_version) {
      $dep = ($options['load_jquery'] === 'true') ? array( 'jquery') : array();
      wp_enqueue_script('ai-lazy-js',plugins_url('scripts/jquery.lazyload-any.min.js' , __FILE__ ), $dep , $version_counter, true);
  } else {
      $html .= '<script type="text/javascript" src="' . AIP_URL . 'includes/scripts/jquery.lazyload-any.min.js" ></script>';
  }
}

if (!empty($resize_on_element_resize)) {
  if ($newer_version) {
      $dep_resize = ($options['load_jquery'] === 'true') ? array( 'jquery', 'ai-js') : array('ai-js');
      wp_enqueue_script('ai-change-js',plugins_url('/scripts/jquery.ba-resize.min.js' , __FILE__ ), $dep_resize, $version_counter, true);
  } else {
      $html .= '<script type="text/javascript" src="' . AIP_URL .'includes/scripts/jquery.ba-resize.min.js" ></script>';
  }
  $html .= '<script type="text/javascript">';
  $html .= 'function initResizeIframe'.$id.'() {';

  // minimum delay is 50 ms !
  if (!empty($resize_on_element_resize_delay) &&
     ((int)$resize_on_element_resize_delay) >= 50 ) {
      $html .= 'jQuery.resize.delay='.esc_html($resize_on_element_resize_delay).';';
  }
  $html .= 'try {';
  if ($resize_on_element_resize === 'body') {
      $html .= 'var res_element = jQuery("#'.$id.'");'; 
  } else {
      $html .= 'var res_element = jQuery("#'.$id.'").contents().find("'.esc_html($resize_on_element_resize).'");';
  }
  $html .= '
     }  catch(e) {
        var res_element = "";
        if (console && console.log) { 
            console.log(e);
        }
    }
    if (res_element.length === 0) {
                // show an error if null
                if (console && console.log) {                  
                     console.log(\'The configuration of "resize_on_element_resize" is invalid. The specified element ' . esc_html($resize_on_element_resize) . ' could not be found or accessed. Please check your configuration.\');
                }  
    } else {   
        // if Array.isArray
        res_element.resize(function(){ ';

  // modify iframe again after resize as new elements could have been appeared
  if ($hideiframehtml != '') {
    $html .= ';aiModifyIframe_' . $id . '();';
  }
  $html .= 'aiResizeIframe(ifrm_'.$id.', "'.$onload_resize_width.'","'.$resize_min_height.'");
               });
            }
    }';
  
  // now done in the onload event.
  // $html .= 'aiReadyCallbacks.push(initResizeIframe' . $id . ');';
  $html .= '</script>';
}

if ($addIosFixInCss) {
   $html .= '<style>#'.$id.' {width: 1px !important;min-width:100% !important;max-width:100% !important;}</style>';
}

// wp >= 3.3
$to_footer = ($include_scripts_in_footer === 'true' && $add_css_class_parent === 'false');
$this->include_additional_files($additional_css, $additional_js, $version_counter, $newer_version, $to_footer);

$html .= $this->interceptAjaxResize($id, $onload_resize_width, $resize_on_ajax, $resize_on_ajax_jquery,
                                    $resize_on_click,  $resize_on_click_elements, $resize_min_height);
 if ($default_options > 100*100) {
    $html .=  __('<p><small>powered by Advanced iFrame free. Get the <a target="_blank" href="https://1.envato.market/Kd23v">Pro version on CodeCanyon</a>.</small></p>', 'advanced-iframe');
 }
 if ($loginPreview) {
	  $html .=  __('<p class="ai-info-bottom-iframe"><small><a target="_blank" href="https://1.envato.market/Kd23v">Advanced iframe PRO</a> is enabled in this preview.</small></p>', 'advanced-iframe');
 }
?>