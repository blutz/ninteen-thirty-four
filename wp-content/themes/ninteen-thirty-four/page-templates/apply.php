<?php /* Template Name: Camper application */ ?>
<?php get_header(); ?>

<meta name='unicamp-page' value='camper-application' />

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg' />
  <div class='photo-block__content'>
    <h2>Volunteer with UCLA UniCamp!</h2>
    <p class='explainer'></p>
  </div>
</section>

<section class='row content-row'>
  <div class='medium-8 columns'>
    <h5>Classic Camp</h5>
    <p class='explainer'>Be a camp counselor this summer with UCLA UniCamp! New volunteer applications are due November 22 and returning volunteer applications are due November 15.</p>
    <p class='explainer'>Look out for us on Bruinwalk or email us at <a href='mailto:unicabinet@unicamp.org'>unicabinet@unicamp.org</a> fto learn more.</p>
    <a class='button' href='https://docs.google.com/forms/d/e/1FAIpQLSe_C-X9T38gxSzyTp40DKXGu1_0FQF7nrIthjnwJSobqXBHjw/viewform?c=0&w=1'>Apply online! &rarr;</a>
  </div>
  <div class='medium-4 columns' style='opacity: 0.5'>
    <h5>Older Camper Programs</h5>
    <p class='explainer'>Applications to become an Older Camper Program advisor (for returning volunteers) will be available soon. Check back here in the next few days.</p>
  </div>
</section>

<?php get_footer(); ?>
