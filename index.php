<?php get_header(); ?>

<section class='large-block' id='test-block'>
  <div class='large-block__content'>
    <h2>Apply for UCLA UniCamp</h2>
    <h4>Apps due: Friday 7th week<br />www.unicamp.org/apply</h4>
    <a class='button button--homepage'>Learn More &rarr;</a>
  </div>
</section>

<section class='large-block' id='test-block-2'>
  <div class='large-block__content'>
    <h2>UCLA Student's Official Philanthropy</h2>
    <h4>UniCamp is an indepently funded 501(c)3 that annually links 500 UCLA student volunteers with over 1,200 urban LA youth.</h4>
    <div class='expand expand--collapsed'>
      <a class='button button--homepage expand__button'>
        More <i class='expand__button__icon'></i>
      </a>
      <div class='expand__content'>
        Content to show on expand
      </div>
    </div>
    <blockquote class='large-block__blockquote'>
      "Children have a right to a childhood filled with beauty, joy, adventure, and companionship. They will grow if the soil they are nurtured in is rich with experience, love and good examples."
      <cite class='large-block__blockquote__cite'>Alan Dyer "A Sense of Adventure"</cite>
    </blockquote>
  </div>
</section>

<section class='large-block' id='test-block-3'>
  <div class='large-block__content'>
    <h2>Serving LA youth since 1928</h2>
    <h4>UniCamp has served over 60,000 youth and over 10,000 volunteers over the past 80 years.</h4>
    <a class='button button--homepage'>Learn More</a>
  </div>
</section>

<section class='large-block' id='continuum-of-care-block'>
  <div class='continuum-of-care__fixed' data-fixed-block>
    <h2>UCLA UniCamp's "Continuum of Care"</h2>
    <img data-rotate-with-scroll
    class='continuum-of-care-block__logo'
    src="<?php echo get_template_directory_uri(); ?>/images/samples/continuum-of-care.svg" />
    <span class='continuum-of-care-block__text'>"Creating the opportunity for today's kids from underserved communities to become UCLA UniCamp campers&hellip;"</span>
  </div>
</section>

<section class='row content-row'>
  <div class='medium-12 columns'>
    <h2>Programs</h2>
    <h4>UCLA UniCamp can be described as having many "Camps within a camp."</h4>
  </div>
  <div class='medium-6 columns'>
    Classic UniCamp. Ages 10-14
  </div>
  <div class='medium-6 columns'>
    Older Camper Programs. Ages 15-17
  </div>
</section>

<?php get_footer(); ?>
