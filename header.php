<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset='<?php bloginfo('charset'); ?>' />
  <meta name='viewport' content='width=device-width' />
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
  <a href='<? echo get_home_url(); ?>'>
    <img class='header__logo' src='<? echo get_template_directory_uri(); ?>/images/unicamp-logo-small.png' alt='UCLA UniCamp Logo' />
  </a>

  <?php wp_nav_menu(array(
    'theme_location' => 'header-menu',
    'menu_class' => 'header__items',
    'container' => '',
    'depth' => 1,
  )); ?>

</header>
