<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package ninteen-thirty-four
 */

get_header();
?>

  <div id="primary" class="content-area">
    <main id="main" class="site-main">

      <section class="error-404 not-found">
        <header class="page-header">
          <h1 class="page-title"><?php esc_html_e( "Sorry, there's nothing here", 'ninteen-thirty-four' ); ?></h1>
        </header><!-- .page-header -->

        <div class="page-content">
          <p>🙁<?php esc_html_e( 'Content not found (error 404). Check your spelling or email registration@unicamp.org for help.', 'ninteen-thirty-four' ); ?></p>

          <?php
          get_search_form();
          ?>

        </div><!-- .page-content -->
      </section><!-- .error-404 -->

    </main><!-- #main -->
  </div><!-- #primary -->

<?php
get_footer();
