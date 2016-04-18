<?php
function ninteen_thirty_four_scripts() {
  wp_enqueue_style('ninteen-thirty-four-style', get_stylesheet_uri());
  wp_enqueue_script('what-input',
    get_template_directory_uri() . '/vendor/what-input.js',
    array('jquery'), false, true);
  wp_enqueue_script('foundation',
    get_template_directory_uri() . '/vendor/foundation.min.js',
    array('jquery', 'what-input'), false, true);
  wp_enqueue_script('jquery-bbq',
    get_template_directory_uri() . '/vendor/jquery.ba-bbq.min.js',
    array('jquery'), false, true);
  wp_enqueue_script('ninteen-thirty-four-script',
    get_template_directory_uri() . '/main.js',
    array('jquery', 'foundation', 'jquery-bbq'), false, true);
}
add_action('wp_enqueue_scripts', 'ninteen_thirty_four_scripts');

function ninteen_thirty_four_menus() {
  register_nav_menu('header-menu', 'Header menu');
}
add_action('init', 'ninteen_thirty_four_menus');
