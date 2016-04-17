<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset='<?php bloginfo('charset'); ?>' />
  <meta name='viewport' content='width=device-width' />
  <title><? bloginfo('name'); ?><? wp_title('|'); ?></title>
  <link rel="icon" type="image/png" sizes="192x192"  href="<? echo get_template_directory_uri(); ?>/images/favicon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="<? echo get_template_directory_uri(); ?>/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="<? echo get_template_directory_uri(); ?>/images/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="<? echo get_template_directory_uri(); ?>/images/favicon-16x16.png">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header>
  <a href='<? echo get_home_url(); ?>'>
    <img class='header__logo' src='<? echo get_template_directory_uri(); ?>/images/unicamp-logo-small.png' alt='UCLA UniCamp Logo' />
  </a>

  <div class='header__menu-contianer'>
    <?php wp_nav_menu(array(
      'theme_location' => 'header-menu',
      'menu_class' => 'header__items',
      'container' => '',
      'depth' => 1,
    )); ?>
  </div>

</header>
