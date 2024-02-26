<?php
/**
 * Plugin Name:       UniCamp Blocks
 * Description:       Blocks for use with ninteen-thirty-four theme
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Byron "Blitzen" Lutz
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       unicamp-blocks
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
function unicamp_blocks_unicamp_blocks_block_init() {
  register_block_type( __DIR__ . '/build/hashtab-content' );
  register_block_type( __DIR__ . '/build/hashtab-title' );
  register_block_type( __DIR__ . '/build/hashtab-title-container' );
  register_block_type( __DIR__ . '/build/hashtabs' );
}
add_action( 'init', 'unicamp_blocks_unicamp_blocks_block_init' );
