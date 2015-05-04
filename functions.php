<?php

function register_my_menus() {
  register_nav_menus(array(
    'top_nav' => 'Top navigation menu',
  ));
}
add_action('init', 'register_my_menus');
