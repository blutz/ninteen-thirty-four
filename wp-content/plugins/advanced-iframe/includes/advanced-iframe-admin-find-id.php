<?php
defined('_VALID_AI') or die('Direct Access to this location is not allowed.');

    aiPostboxOpen("id-help-id", __('How to find elements, ids and classes', 'advanced-iframe'), $closedArray); 

    echo '<p>';
    _e('If you like to hide or modify elements you need to identify them in the page.', 'advanced-iframe'); 
    _e('This is done e.g. by the tag name itself. header, footer, h1 can often be used directly. ', 'advanced-iframe'); 
    _e('Most of the other elements in html are divs which very often can be identified by either an id or a class. ', 'advanced-iframe');
    _e('Ids are (should be) unique in a page while classes can be used several times.<br>Now lets find them:', 'advanced-iframe');       
    echo '</p>'; 
    echo '<img class="img-find-id" src="' . plugins_url() . '/advanced-iframe/img/how-to-find-id.png">';
    echo '<ol><li>';
    _e('Go to the page and press F12. This does open the developer tools. On the left upper corner is a small arrow icon.', 'advanced-iframe');
    echo '</li><li>';
    _e('Click there and hover over the element with your mouse. Click on the element you are interested in and then it is selected in the elements tab.', 'advanced-iframe'); 
    echo '</li><li>';
    _e('Tags - if you want to hide/modify a tag (e.g. header, footer, h1, h2) simply use it directly e.g. h1,h2', 'advanced-iframe'); 
    echo '</li><li>';
    _e('Id - if you want to hide/modify an element where you have the id use #id (# + the id). The id is defined in the html with id="xxx"', 'advanced-iframe'); 
    echo '</li><li>';
    _e('Class - if you want to hide/modify an element where you have the class use .class (. + the class). A class is defined in the html with class="class1 class2 class3". Elements can have several classes! Only use the one which does identify the element! Entering more then one of an element will not work. e.g. class="navbar inline" -> Use .navbar. If this class is not unique you need to check the parent which has maybe a id you can use', 'advanced-iframe'); 
    echo'</li></ol>';
    _e('You can use any valid <a class="jquery-help-link" href="#">jQuery selector pattern</a>!', 'advanced-iframe'); 
    _e(' Follow the link for a small overview how this can look like.', 'advanced-iframe');    
    _e(' You can also identify elements which do not have a unique selector but maybe a unique parent. Many browsers show the full selector of an element at the bottom.', 'advanced-iframe');    	
	
    aiPostboxClose();	
?>


   