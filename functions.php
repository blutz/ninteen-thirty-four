<?php

// Enqueue js/css
function register_my_scripts() {
  wp_enqueue_style('ninteen-thirty-four', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'register_my_scripts'); 

// Nav menus
function register_my_menus() {
  register_nav_menus(array(
    'top_nav' => 'Top navigation menu',
  ));
}
add_action('init', 'register_my_menus');

// Custom header
$custom_header_args = array(
  'default-image' => get_template_directory_uri() . '/assets/images/header-default.jpg',
  'flex-height' => true,
  'flex-width' => true,
  'height' => 500,
  'width' => 1024,
);
add_theme_support('custom-header', $custom_header_args);
