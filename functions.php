<?php
function ninteen_thirty_four_scripts() {
  wp_enqueue_style('ninteen-thirty-four-style', get_stylesheet_uri());
  wp_enqueue_script('ninteen-thirty-four-script',
    get_template_directory_uri() . '/main.js',
    array('jquery'));
}
add_action('wp_enqueue_scripts', 'ninteen_thirty_four_scripts');

function ninteen_thirty_four_menus() {
  register_nav_menu('header-menu', 'Header menu');
}
add_action('init', 'ninteen_thirty_four_menus');
