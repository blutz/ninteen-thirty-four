<?php
// if uninstall.php is not called by WordPress, die
if (!defined('WP_UNINSTALL_PLUGIN')) {
    die;
}

$option_name = 'advancediFrameAdminOptions';
$option_name2 = 'advancediFrameParameterData';
$options = get_option($option_name);

if ( 'true' === $options['delete_options_db'] ) { 
	delete_option($option_name);
	// for site options in Multisite
	delete_site_option($option_name);
	delete_option($option_name2);
	// for site options in Multisite
	delete_site_option($option_name2);
}
?>