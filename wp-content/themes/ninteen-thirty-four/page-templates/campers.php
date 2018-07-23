<?php /* Template Name: Campers */ ?>
<?php get_header(); ?>

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg' />
  <div class='photo-block__content'>
    <h2>Why UCLA UniCamp</h2>
    <p class='explainer'>Children in LA have a hard time seeing the stars or listening to a flowing river as they go to bed. Camp offers the chance to experience nature while getting away from the stress of everyday life in the city. Camp gives us the chance to breathe fresh air and drink clean water and stop trying to be cool and just be a kid. Plain and simple, camp is a place where you can reinvent yourself, meet new friends and just have fun.</p>
  </div>
</section>

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.AboutCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.AboutCamp.jpg' />
  <div class='photo-block__content'>
    <h2>About UCLA UniCamp</h2>
    <p class='explainer'>Your experience at UniCamp will vary depending on which session or program you are a part of. Each week of UniCamp and OCP Program center around the foundations of a traditional residential summer camp. Participants start by selecting a “Camp Name” to express their individualism. Cabin groups of like aged individuals are then formed with 2 - 4 UCLA Student Volunteers as their counselors. During the week you will sing songs, play games, explore nature, hike, bike and climb, all while bonding with the cabin and student volunteers.</p>
    <div class='expand expand--collapsed'>
      <a href='#' class='button expand__button'>
        More <i class='expand__button__icon'></i>
      </a>
      <div class='expand__content'>
        <p>
          Each week and OCP program has specific activities that will only take place during that week of camp. These programs will focus around the fundamentals of the OCP program or what specific initiative is being addressed for that week of camp. This makes each week of UniCamp unique. There are no two weeks of camp that are exactly like one another. In the end, both groups of participants the volunteers and the campers will lead together, play together &amp; learn together.
        </p>
      </div>
    </div>
  </div>
</section>

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.Registration.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.Registration.jpg' />
  <div class='photo-block__content'>
    <h2>Public Camper Applications</h2>
    <p class='explainer'>In an effort to create more impactful programming, UCLA UniCamp has begun partnering with local nonprofits and after school programs to design each week of camp. This has been a great opportunity for us but it does limit the number of camper spots available to the public. Because of this we have decided to implement a Camper Application instead of a first come, first served registration.</p>
    <div class='expand expand--collapsed' data-expand='publicCamperApplicationExpand'>
      <a class='button expand__button'>
        More <i class='expand__button__icon'></i>
      </a>
    </div>
  </div>
</section>
<section class='expand-block' id='publicCamperApplicationExpand'>
  <div class='row'>
    <div class='medium-12 columns'>
      <h5>2018 Public Camper Application Process</h5>
      <p class='explainer'>
        Public camper applicatiosn are now available! You can <a href='https://apply.unicamp.org/login/open'>browse our open sessions</a> and enroll online today!
      </p>
      <p class='explainer'>
        If you were referred to a specific session or you have an enrollment code, go to <a href='https://apply.unicamp.org/'>apply.unicamp.org</a> and type in your code.
      </p>
      <p class='explainer'>Email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> if you have any questions.</p>
      <a class='button' href='https://apply.unicamp.org/login/open'>
        Sign up for camp! &rarr;
      </a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
