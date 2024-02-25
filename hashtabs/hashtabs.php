<?php
/**
 * Plugin Name:       Tabs with Hash Navigation
 * Plugin URI:        https://www.unicamp.org/
 * Description:       Tabs that modify and respond to a hash in the URL (e.g. #about)
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            UCLA UniCamp
 * License:           UNLICENSED
 * License URI:       UNLICENSED
 * Text Domain:       hashtabs
 *
 * @package           unicamp
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function hashtabs_hashtabs_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'hashtabs_hashtabs_block_init' );
