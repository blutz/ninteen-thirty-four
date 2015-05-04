<!doctype html>
<html <?php language_attributes(); ?>>
  <head><?php // Next two lines cause re-parsing; keep at the top ?>
    <meta charset='<?php bloginfo( 'charset' ); ?>' />
    <meta http-equiv='x-ua-compatible' content='ie=edge' />
    <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>

    <link rel='stylesheet' href='<?php echo get_template_directory_uri(); ?>/style.css' />
    <?php wp_head(); ?>
  </head>

  <body>
    <header class='header'>
      <a class='header__logo' href='<?php echo get_site_url(); ?>' title='UCLA UniCamp'></a>
      <nav>
        <?php wp_nav_menu(array(
          'theme_location' => 'top_menu',
          'container' => false,
          'menu_class' => '',
          'items_wrap' => '%3$s',
          'depth' => 1,
        )); ?>
      </nav>
    </header>
