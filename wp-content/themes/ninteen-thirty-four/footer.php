<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ninteen-thirty-four
 */

?>

  </div><!-- #content -->
</div><!-- #page -->

<footer id="colophon" class="site-footer">
  <div class='footer__wrap'>
    <div class='footer__content'>
      <div class='footer__content__info'>
        <img class='footer__content__info__logo' src='<? echo get_template_directory_uri() . '/img/university-camps.png' ?>' />
        <div class='footer__content__info__text'>
          <em>UCLA UniCamp is a program of University Camps, Inc.</em>
          <br />
          <strong>&copy; <?php echo date('Y'); ?> University Camps, Inc.</strong>
        </div>
      </div>
      <ul class='footer__content__contact'>
        <li>
          <a class='footer__content__contact__title' href='mailto:registration@unicamp.org'><strong>registration@unicamp.org</strong></a> <i class='fas fa-envelope'></i>
        </li>
        <li>
          <a class='footer__content__contact__title' href='tel:3102088252'><strong>(310) 208-8252</strong></a> <i class='fas fa-phone'></i>
        </li>
        <li>
          <a class='footer__content__contact__title' href='https://goo.gl/maps/2945ma54RCvs5nNYA'><strong>UCLA UniCamp Office</strong><br />2131 John Wooden Center<br />Los Angeles, CA 90095-1612</a> <i class='fas fa-building'></i>
        </li>
      </ul>
    </div>
  </div>
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>
