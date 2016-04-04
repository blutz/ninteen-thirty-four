<?php /* Template Name: Partnerships */ ?>
<?php get_header(); ?>

<section
class='photo-block'
style='background-image: url("<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.PartnerAgencies.jpg")'>
  <div class='photo-block__content'>
    <h2>Partner Agencies</h2>
    <p class='explainer'>UCLA UniCamp partners with local nonprofits and after school programs to expand UniCamp’s impact beyond the summer residential camping experience. We create symbiotic relationships with agencies looking to be a partner in a custom UniCamp experience.</p>
  </div>
</section>

<section
class='photo-block'
style='background-image: url("<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.Expectations.jpg")'>
  <div class='photo-block__content'>
    <h2>Agency Expectations</h2>
    <p class='explainer'>UCLA UniCamp partners with local nonprofits and after-school programs to expand UniCamp's impact beyond the summer residential camping experience. We create symbiotic relationships with agencies looking to be a partner in a custom UniCamp experience.</p>
    <a class='button' data-open='agencyExpectationsModal'>Learn more</a>
    <div class='expand expand--collapsed' data-expand='agencyExpectationsExpand'>
      <a class='button expand__button'>Learn more</a>
    </div>
  </div>
  <div class='reveal' id='agencyExpectationsModal' data-reveal>
    <button class="close-button" data-close aria-label="Close modal" type="button">
      <span aria-hidden="true">&times;</span>
    </button>
    <h3>Agency Expectations</h3>

  </div>
</section>
<section class='expand-block' id='agencyExpectationsExpand'>
  <h3>Agency Expectations</h3>
  This is something that's part of the expand block
</section>

<?php get_footer(); ?>
