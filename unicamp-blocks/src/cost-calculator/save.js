/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
  return (
    <div {...useBlockProps.save() }>
      <h4>Camp Cost Calculator</h4>
      <noscript>
        <p>The camp cost calculator could not be loaded.</p>
        <p>Reduced rates are available to campers who meet any one of the following criteria:</p>
        <ul>
          <li>Are currently in the foster system.</li>
          <li>Currently receive benefits from CalFresh, CalWORKS, FDPIR, or WIS (case number required).</li>
          <li>Meet the USDA income eligibility guidelines for the school year prior to the summer season. <a href='https://www.fns.usda.gov/cn/income-eligibility-guidelines'>Click here for the USDA income eligibility guidelines.</a></li>
        </ul>
        <p>If you qualify, you will automatically be offered the reduced rate when you submit your UniCamp registration.</p>
      </noscript>

      <div data-step='intro' style="display: none">
        <p>The reduced camp rate is available to campers who qualify for the Summer Food Service Program. Foster children, children who receive certain government benefits (CalFresh, CalWORKS, FDPIR, or WIS), and children in families who <a href='https://www.fns.usda.gov/cn/income-eligibility-guidelines'>meet certain income limits</a> qualify.</p>
        <p>Use this calculator to see if you are eligible for the reduced rate. More details (e.g. case numbers and income information) may be required on the camp application. Campers who qualify will automatically be offered the reduced rate during registration.</p>
        <button>Start calculator &rarr;</button>
      </div>

      <div data-step='dcfs-1' style='display: none'>
        <p>Does the camper have an active LA County DCFS case number?</p>
        <button value='yes'>Yes</button>
        <button value='no'>No</button>
      </div>

      <div data-step='dcfs-2' style='display: none'>
        <p>Is the camper in a Short-Term Residential Therapeutic Program (STRTP)?</p>
        <button value='yes'>Yes</button>
        <button value='no'>No</button>
      </div>

      <div data-step='dcfs-qualify' style='display: none'>
        <p>The camper likely <strong>qualifies to attend UniCamp for FREE</strong> on a DCFS campership. These camperships are subject to DCFS approval and are only available <em>for one session per child, per summer</em>, even across programs other than UniCamp. (For instance, if your camper goes to UniCamp and another summer camp, you will only be able to use the campership on <em>one</em> of those programs.)</p>
        <p>Additional DCFS-specific information (e.g. case number, case worker, and contact info) will be required on the UniCamp application and, if you choose to use the DCFS campership with UniCamp, will be submitted to DCFS for verification. If DCFS does not approve your campership, you will be required to pay the normal rates prior to attending camp.</p>
        <button>See my cost without a DCFS campership &rarr;</button>
      </div>

      <div data-step='foster' style='display: none'>
        <p>Is the camper currently in the foster system?</p>
        <button value='yes'>Yes</button>
        <button value='no'>No</button>
      </div>

      <div data-step='program' style='display: none'>
        <p>Does the camper currently receive benefits from CalFresh, CalWORKS, FDPIR, or WIS?</p>
        <button value='yes'>Yes</button>
        <button value='no'>No</button>
      </div>

      <div data-step='income' style='display: none'>
        <form>
        <label><strong>What is your household's combined <em>annual</em> income?</strong><br /><em>Include all household members, including children, and all income sources, including work, child support/alimony, payments from pensions/retirement/social security, and any other earnings.</em>
          <br />
          $&nbsp;<input type='number' value="30000" min="0" max="1000000000" step="1" required name='income' />
        </label>
        <br />
        <br />
        <label><strong>How many people are in your household?</strong><br /><em>Count everyone, including the camper, all children, and all adults.</em>
          <br />
          <input type='number' value="2" min="1" max="50" required name='household-size' />
        </label>
        <br />
        <br />
        <input type='submit' value='Continue &rarr;' />
        <div class='error' style='color: red; display: none;'><strong>Error:</strong> Fill out both fields above with whole numbers before proceeding.</div>
        </form>
      </div>

      <div data-step='final-qualify' style='display: none'>
        <p>Based on your responses, <strong>your camper qualifies for the reduced rate of $229</strong>.</p>
        <p><em>(The reduced rate for The Village Session is $349.)</em></p>
        <p>The camper application will ask for more details (e.g. case numbers or income information) and will automatically offer you the reduced rate if you qualify.</p>
        <p>The actual cost of camp to UniCamp is $800 per camper, but we offer all campers an automatic campership to help make camp more accessible. Additional camperships are available on a limited basis: email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> for more information.</p>
        <button data-action='start-over'>&larr; Start over</button>
      </div>

      <div data-step='final-no-qualify' style='display: none'>
        <p>Based on your responses, <strong>your camper does NOT qualify for the reduced rate, but they are eligible to attend camp for $350</strong>.</p>
        <p><em>(The cost for The Village Session is $479.)</em></p>
        <p>The actual cost of camp to UniCamp is $800 per camper, but we offer all campers an automatic campership to help make camp more accessible. Additional camperships are available on a limited basis: email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> for more information.</p>
        <button data-action='start-over'>&larr; Start over</button>
      </div>

      <div data-step='error' style='display: none'>
        <p>Sorry, we encountered an error.</p>
        <p>Reduced rates are available to campers who meet any one of the following criteria:</p>
        <ul>
          <li>Are currently in the foster system.</li>
          <li>Currently receive benefits from CalFresh, CalWORKS, FDPIR, or WIS (case number required).</li>
          <li>Meet the USDA income eligibility guidelines for the school year prior to the summer season. <a href='https://www.fns.usda.gov/cn/income-eligibility-guidelines'>Click here for the USDA income eligibility guidelines.</a></li>
        </ul>
        <p>If you qualify, you will automatically be offered the reduced rate when you submit your UniCamp registration.</p>
        <button data-action='start-over'>&larr; Start over</button>
      </div>
    </div>
  );
}
