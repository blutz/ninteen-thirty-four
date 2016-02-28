<?php
function ninteen_thirty_four_scripts() {
  wp_enqueue_style('ninteen-thirty-four-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'ninteen_thirty_four_scripts');
