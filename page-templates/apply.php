<?php /* Template Name: Camper application */ ?>
<?php get_header(); ?>

<meta name='unicamp-page' value='camper-application' />

<section
class='photo-block'
style='background-image: url("<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg")'>
  <img class='photo-block__small-image' src='<? echo get_template_directory_uri(); ?>/images/photos/campers-families/CampersFamilies.WhyCamp.jpg' />
  <div class='photo-block__content'>
    <h2>Apply to UniCamp</h2>
    <p class='explainer'>Thanks for your interest in UCLA UniCamp! Enter your application code below to get started. If chosen to attend, you will receive registration information separately.</p>
  </div>
</section>

<section id='applicationIntro' class='row content-row apply__intro'>
  <div class='medium-10 medium-offset-1 columns'>
    <h2>Type your application code</h2>
    <div class='row'>
      <div class='large-8 large-offset-2 columns'>
        <form id='applicationCodeForm'>
          <div class='input-group apply__code-inputs'>
            <input type='text' class='input-group-field' id='applicationCode' placeholder='Your application code...' required />
            <div class='input-group-button'>
              <input type='submit' class='button' value='Submit' />
            </div>
          </div>
          <span class='form-error' id='applicationCodeFormError'>That's not a valid code; please try again. Contact us if it doesn't work after a few tries.</span>
        </form>
      </div>
    </div>
    <hr />
    <h2>Don't have a code?</h2>
    <p class='explainer'>Email us for a code or apply for a session with open enrollment below. <a href='/programs'>Learn more about our programs&nbsp;&rarr;</a></p>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 3: Community Building/Activism for African American Youth</h5>
        <strong>Organizational partner:</strong> The Village Nation
        <br />
        <strong>Dates:</strong> July 5 - July 10
        <br />
        <strong>Contact:</strong> Email Tia "Tippy Top" Brandt at <a href='mailto:tbrandt@unicamp.org'>tbrandt@unicamp.org</a>
        <br />
        <a class='button' href='#application-code=session3'>Apply Now&nbsp;&rarr;</a>
      </div>
      <div class='medium-6 columns'>
        <h5>Session 6: Healthy Lifestyles</h5>
        <strong>Organizational partner:</strong> Children's Hospital Los Angeles
        <br />
        <strong>Dates:</strong> July 31 - August 6
        <br />
        <strong>Contact:</strong> Email Mike "Dr. Pepper" Scheipe at <a href='mailto:mscheipe@unicamp.org'>mscheipe@unicamp.org</a>
        <br />
        <em>Contact us for an application code if you think this session is right for you.</em>
      </div>
    </div>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 7: Empowerment Through Art</h5>
        <strong>Organizational partner:</strong> TBD
        <br />
        <strong>Dates:</strong> August 6 - August 12
        <br />
        <strong>Contact:</strong> Email Isabella "Squirtle" Granados at <a href='mailto:igranados@unicamp.org'>igranados@unicamp.org</a>
        <br />
        <a class='button' href='#application-code=session7'>Apply Now&nbsp;&rarr;</a>
      </div>
    </div>
    <hr />
    <p class='explainer'>Enroll in one of our Older Camper Programs (CLIMB, UniCorps, and WALL). <a href='/programs#ocp'>Learn more about Older Camper Programs&nbsp;&rarr;</a></p>
    <p class='center'>
      <a class='button large' href='#application-code=ocp'>Apply for OCP&nbsp;&rarr;</a>
    </p>
  </div>
</section>

<section id='applicationDetails' class='row content-row apply__details'>
  <div class='medium-10 medium-offset-1 columns'>
    <a href='#' class='apply__back'>&larr; Apply to a different session</a>
    <h2></h2>
    <h4></h4>
    <iframe class='apply__form' id='applicationForm' frameborder='0' marginheight='0' marginwidth='0'>Loading&hellip;</iframe>
  </div>
</section>


<?php get_footer(); ?>
