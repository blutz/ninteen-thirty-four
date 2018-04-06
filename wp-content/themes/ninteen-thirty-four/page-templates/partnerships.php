<?php /* Template Name: Partnerships */ ?>
<?php get_header(); ?>

<section
class='photo-block'
style='background-image: url("<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.PartnerAgencies.jpg")'>
  <img class='photo-block__small-image' src='<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.PartnerAgencies.jpg' />
  <div class='photo-block__content'>
    <h2>Partner Agencies</h2>
    <p class='explainer'>UCLA UniCamp partners with local nonprofits and after school programs to expand UniCamp’s impact beyond the summer residential camping experience. We create symbiotic relationships with agencies looking to be a partner in a custom UniCamp experience.</p>
  </div>
</section>

<section
class='photo-block'
style='background-image: url("<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.Expectations.jpg")'>
  <img class='photo-block__small-image' src='<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.Expectations.jpg' />
  <div class='photo-block__content'>
    <h2>Agency Expectations</h2>
    <p class='explainer'>UCLA UniCamp partners with local nonprofits and after-school programs to expand UniCamp's impact beyond the summer residential camping experience. We create symbiotic relationships with agencies looking to be a partner in a custom UniCamp experience.</p>
    <div class='expand expand--collapsed' data-expand='agencyExpectationsExpand'>
      <a class='button expand__button'>
        More <i class='expand__button__icon'></i>
      </a>
    </div>
  </div>
</section>
<section class='expand-block' id='agencyExpectationsExpand'>
  <div class='row'>
    <div class='medium-12 columns'>
      <h5>Cost Sharing</h5>
      <p class='explainer'>
        Depending on the program, sending a camper to UCLA UniCamp costs $600 - $1,000. As we are investing in your programs’ participants we expect agencies are open to contributing up to half of the cost of sending a camper to UCLA UniCamp. ~$300 - $500. This can be either via direct contributions or pass through funds from grants.
      </p>
      <h5>Recruitment</h5>
      <p class='explainer'>
        Rather than having a first come, first serve based program, we expect agencies to select campers who have a strong desire to attend UCLA UniCamp and who may receive the most from the experience.
      </p>
      <h5>Statistics</h5>
      <p class='explainer'>
        We will work with agencies to agree on the best forms of evaluation for each agency. It is vital for UCLA UniCamp to see what kind of an impact our program is having outside of the week at camp. We rely on agencies that have year round interactions with campers to provide additional data.
      </p>
    </div>
  </div>
</section>

<section
class='photo-block'
style='background-image: url("<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.Benefits.jpg")'>
  <img class='photo-block__small-image' src='<?php echo get_template_directory_uri(); ?>/images/photos/agencies/Agencies.Benefits.jpg' />
  <div class='photo-block__content'>
    <h2>Agency Benefits</h2>
    <p class='explainer'>Agencies will see great value in joining the UCLA UniCamp family. Becoming a partner agency means you will have a custom UniCamp experience built for you. Your week of camp will be tailored to your agency specific age range and programs. We tell our partner agencies to think of this week of camp as a continuation of their program.</p>
  </div>
</section>

<section class='row content-row'>
  <div class='medium-12 columns'>
    <h2>Agency RFP</h2>
    <p class='explainer'>
      If you are interested in becoming a partner agency with UCLA UniCamp please contact us.
    </p>
    <div class='medium-6 medium-offset-3 columns end'>
      <?php echo do_shortcode("
        [contact-form to='blutz@unicamp.org' subject='[UniCamp.org Contact Form Submission'][contact-field label='Name' type='name' required='1'/][contact-field label='Email' type='email' required='1'/][contact-field label='How can we help you?' type='textarea' rows='10' required='1'/][/contact-form]");
      ?>
    </div>
    <!--<em>Form coming soon &mdash; contact us directly.</em>-->
  </div>
</section>

<?php get_footer(); ?>
