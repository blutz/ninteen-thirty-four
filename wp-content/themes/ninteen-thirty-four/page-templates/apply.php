<?php /* Template Name: Camper application */ ?>
<?php get_header(); ?>

<meta name='unicamp-page' value='camper-application' />

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg' />
  <div class='photo-block__content'>
    <h2>Volunteer with UCLA UniCamp!</h2>
    <p class='explainer'>Applications for new and returning volunteers are now available!</p>
  </div>
</section>

<section class='row content-row'>
  <div class='medium-12 columns'>
    <h5>Classic Camp</h5>
    <p class='explainer'>Be a camp counselor this summer with UCLA UniCamp! Applications will be accepted on a rolling basis. Email us at <a href='mailto:unicabinet@unicamp.org'>unicabinet@unicamp.org</a> to learn more.</p>
    <a class='button' href='https://docs.google.com/forms/d/e/1FAIpQLSe_C-X9T38gxSzyTp40DKXGu1_0FQF7nrIthjnwJSobqXBHjw/viewform?c=0&w=1' style='display: inline-block; margin: auto; font-size: 1.3rem; text-align: center; width: auto; position: relative; left: 50%; transform: translateX(-50%); '>Apply online! &rarr;</a>
  </div>
</section>
<?php get_footer(); ?>
