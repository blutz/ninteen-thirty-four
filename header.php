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
  <ul class='header__items'>
    <li class='header__item'><a href='#'>Programs</a></li>
    <li class='header__item header__item--active'><a href='#'>Campers</a></li>
    <li class='header__item'><a href='#'>Partnerships</a></li>
    <li class='header__item'><a href='#'>Volunteers</a></li>
    <li class='header__item'><a href='#'>Alumni</a></li>
    <li class='header__item'><a href='#'>Blog</a></li>
    <li class='header__item'><a href='#'>Donate</a></li>
  </ul>
</header>
