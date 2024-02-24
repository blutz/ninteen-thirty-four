<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ninteen-thirty-four
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
  <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'ninteen-thirty-four' ); ?></a>

  <header id="masthead" class="site-header">
    <nav id="site-navigation" class="main-navigation">
      <div class='mobile-navigation'>
        <?php
        wp_nav_menu( array(
          'theme_location' => 'menu-2',
          'menu_id'        => 'mobile-quicklinks',
          'menu_class'     => 'mobile-quicklinks',
        ) );
        ?>
        <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Menu&nbsp;&nbsp;<i class='fas fa-bars'></i></button>
      </div>
      <?php the_custom_logo(); ?>
      <?php
      wp_nav_menu( array(
        'theme_location' => 'menu-1',
        'menu_id'        => 'primary-menu',
        'menu_class'     => 'primary-menu',
      ) );
      ?>
    </nav><!-- #site-navigation -->
  </header><!-- #masthead -->

  <div id="content" class="site-content">
