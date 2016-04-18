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
      <div class='medium-8 medium-offset-2 columns'>
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
    <p class='explainer'>Contact us if you think one of our programs is right for you. <a href='/programs'>Learn more about our programs &rarr;</a></p>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 1: College readiness and retention</h5>
        <strong>Organizational partner:</strong> Project GRAD
        <br />
        <strong>Dates:</strong> June 19 - 25
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
      <div class='medium-6 columns'>
        <h5>Session 2: Social &amp; Emotional Learning</h5>
        <strong>Organizational partner:</strong> Project GRAD
        <br />
        <strong>Dates:</strong> June 25 - July 1
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
    </div>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 3: Community Building/Activism</h5>
        <strong>Organizational partner:</strong> The Village Nation
        <br />
        <strong>Dates:</strong> July 5 - July 10
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
      <div class='medium-6 columns'>
        <h5>Session 4: Literacy Intervention</h5>
        <strong>Organizational partner:</strong> LA Times &amp; McCormick Fund
        <br />
        <strong>Dates:</strong> July 16 - 22
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
    </div>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 5: Nonviolent Communication</h5>
        <strong>Organizational partner:</strong> Dana Middle School
        <br />
        <strong>Dates:</strong> July 24 - July 31
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
      <div class='medium-6 columns'>
        <h5>Session 6: Healthy Lifestyles</h5>
        <strong>Organizational partner:</strong> Children's Hospital Los Angeles
        <br />
        <strong>Dates:</strong> July 31 - August 7
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
    </div>
    <div class='row'>
      <div class='medium-6 columns'>
        <h5>Session 7: Empowerment Through Art</h5>
        <strong>Organizational partner:</strong> TBD
        <br />
        <strong>Dates:</strong> August 7 - August 14
        <br />
        <strong>Contact:</strong> Contact "Dr. Pepper" at <a href='mailto:mschipe@unicamp.org'>mschipe@unicamp.org</a> or call us at (844)UNI-CAMP.</p>
      </div>
    </div>
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
