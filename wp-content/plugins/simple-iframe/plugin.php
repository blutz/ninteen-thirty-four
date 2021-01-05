<?php

/*
Plugin Name: Simple Iframe
Plugin URI: https://wordpress.org/plugins/simple-iframe/
Description: Easily insert iframes into the block editor.
Author: Jorge González
Version: 1.1.1
Author URI: http://unapersona.com
License: GPLv2 or later
Text Domain: simple-iframe
*/

/*
 * Init plugin
 */

namespace unapersona;

require_once('src/blocks.php');
$block = new Blocks('simple-iframe');
