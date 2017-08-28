<?php /* Template Name: UniCabinet/LSHIP Intro */ ?>
<?php get_header(); ?>

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg' />
  <div class='photo-block__content'>
    <h2>We're growing</h2>
    <p class='explainer'>We’re adding a brand new leadership program to UniCamp this year. Join us and leave your mark on the organization!</p>
  </div>
</section>

<section class='row content-row'>
  <div class='medium-12 columns'>
    <p class='explainer'>
      <strong>Our mission: to give campers from underserved communities an impactful camp experience and to give UCLA students the opportunities and resources to grow as leaders.</strong>
    </p>

    <br />

    <h4>UniCabinet</h4>
    <p class='explainer'>
      Even after 83 years, we’re never done improving. This year, we will be starting training earlier and giving students more resources and opportunities to learn and fundraise. UCLA UniCamp will be led by UniCabinet — a new student leadership group that will give students the space and support to envision the future of the UCLA UniCamp programs and turn it into a reality.
    </p>

    <a class='button' href='#cabinet'>Apply for UniCabinet &rarr;</a>
    <p class='explainer'>
      <small>
      <strong>UniCabinet is open to all current UCLA Students, regardless of experience. The application will be open until Tuesday, September 5 at 11:59pm.</strong>
      UCLA UniCamp prides itself in being the official charity of the students of UCLA, and a student leadership development program. We will provide training, mentoring, and tools; our only requirement for applicants is a passion for the mission.
      </small>
    </p>

    <h4>Session Leadership (LSHIP)</h4>
    <p class='explainer'>
      Each session’s LSHIP team will be supported by UniCabinet. They will be given more resources and space to focus on working with their partner and student volunteers to develop a unique summer camp experience tailored to meet the needs of their chosen target population. 
    </p>

    <a class='button' href='#lship'>Apply for LSHIP &rarr;</a>
    <p class='explainer'>
      <small>
      <strong>LSHIP is open to all Woodsey volunteers. The application will be open until Tuesday, September 5 at 11:59pm.</strong>
      UCLA UniCamp prides itself in being the official charity of the students of UCLA, and a student leadership development program. We will provide training, mentoring, and tools; our only requirement for applicants is a passion for the mission.
      </small>
    </p>
  </div>
</section>

<section class='row content-row' id='applications'>
  <div class='medium-12 columns'>
    <h2>Applications</h2>
    <ul class="tabs" data-tabs id="application-tabs" data-deep-link="true" data-deep-link-smudge="true">
      <li class="tabs-title is-active"><a href="#cabinet" aria-selected="true">UniCabinet Application</a></li>
      <li class="tabs-title"><a data-tabs-target="lship" href="#lship">LSHIP Application</a></li>
    </ul>
    <div class="tabs-content" data-tabs-content="application-tabs">
      <div class="tabs-panel is-active" id="cabinet">
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrHHb1oQsVkq8zio?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </div>
      <div class="tabs-panel" id="lship">
        <iframe class="airtable-embed" src="https://airtable.com/embed/shrlLZYllMLD2fwRH?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
