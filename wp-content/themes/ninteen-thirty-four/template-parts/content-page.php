<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ninteen-thirty-four
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <?php if(!get_page_template_slug() == 'full-page.php'): ?>
    <header class="entry-header">
      <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
    </header><!-- .entry-header -->
  <?php endif; ?>

  <?php ninteen_thirty_four_post_thumbnail(); ?>

  <div class="entry-content">
    <?php
    the_content();

    wp_link_pages( array(
      'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'ninteen-thirty-four' ),
      'after'  => '</div>',
    ) );
    ?>
  </div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
