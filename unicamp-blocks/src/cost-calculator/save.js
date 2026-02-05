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
        <p>The camp cost calculator could not be loaded. Contact us for more information about rates.</p>
      </noscript>

      <div data-step='intro' style="display: none">
        <p>Camp rates are based on a variety of factors, including participation in CalFresh and household income.</p>
        <p>Information you input into this calculator is not saved. When you register for camp, we will ask for more details (e.g. case numbers and detailed income information).</p>
        <button className='button'>See your camp rate &rarr;</button>
      </div>

      <div data-step='dcfs-1' style='display: none'>
        <p>Does the camper have an active LA County DCFS case number?</p>
        <button className='button button--inline' value='yes'>Yes</button>
        <button className='button' value='no'>No</button>
      </div>

      <div data-step='dcfs-2' style='display: none'>
        <p>Is the camper in a Short-Term Residential Therapeutic Program (STRTP)?</p>
        <button className='button button--inline' value='yes'>Yes</button>
        <button className='button' value='no'>No</button>
      </div>

      <div data-step='dcfs-qualify' style='display: none'>
        <p>You likely <strong>qualify to attend UniCamp for FREE</strong> on a DCFS campership. These camperships are subject to DCFS approval and are only available <em>for one session per child, per summer</em>.</p>
        <p>Additional DCFS-specific information (e.g. case number, case worker, and contact info) will be required on the UniCamp application and, if you choose to use the DCFS campership with UniCamp, will be submitted to DCFS for verification. If DCFS does not approve your campership, you will be required to pay the normal rates prior to attending camp.</p>
        <button className='button'>See my cost without a DCFS campership &rarr;</button>
      </div>

      <div data-step='foster' style='display: none'>
        <p>Is the camper currently in the foster system?</p>
        <button className='button button--inline' value='yes'>Yes</button>
        <button className='button' value='no'>No</button>
      </div>

      <div data-step='program' style='display: none'>
        <p>Does the camper currently receive benefits from CalFresh, CalWORKS, FDPIR, or WIS?</p>
        <button className='button button--inline' value='yes'>Yes</button>
        <button className='button' value='no'>No</button>
      </div>

      <div data-step='income' style='display: none'>
        <form>
        <label><strong>What is your household&rsquo;s combined <em>annual</em> income?</strong><br /><em>Include all household members, including children, and all income sources, including work, child support/alimony, payments from pensions/retirement/social security, and any other earnings.</em>
          <br />
          $&nbsp;<input type='number' value="30000" min="0" max="1000000000" step="1" required name='income' />
        </label>
        <br />
        <br />
        <label>
          <div><strong>How many <em>children</em> are in your household?</strong></div>
          <br />
          <input type='number' value="1" min="1" max="20" required name='household-size-children' />
        </label>
        <br />
        <br />
        <label>
          <div><strong>How many <em>adults</em> are in your household?</strong></div>
          <input type='number' value="1" min="1" max="20" required name='household-size-adults' />
        </label>
        <br />
        <br />
        <input className='button' type='submit' value='Continue &rarr;' />
        <div className='error' style='color: red; display: none;'><strong>Error:</strong> Fill out both fields above with whole numbers before proceeding.</div>
        </form>
      </div>

      <div data-step='final-low' style='display: none'>
        <p>Your camper qualifies for the <strong>low rate of $265</strong> (or $375 for The Village Session).</p>
        <p><small>The full cost to UniCamp is $1600 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> for more information.</small></p>
        <button data-action='start-over' className='button button--secondary'>&larr; Start over</button>
      </div>

      <div data-step='final-medium' style='display: none'>
        <p>Your camper qualifies for the <strong>medium rate of $425</strong> (or $675 for The Village Session).</p>
        <p><small>The full cost to UniCamp is $1600 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> for more information.</small></p>
        <button data-action='start-over' className='button button--secondary'>&larr; Start over</button>
      </div>

      <div data-step='final-high' style='display: none'>
        <p>Your camper qualifies for the <strong>general rate of $750</strong> (or $999 for The Village Session).</p>
        <p><small>The full cost to UniCamp is $1600 per camper, but we automatically offer a campership to everyone based on the information you filled out. Additional camperships are available on a limited basis: email us at <a href='mailto:registration@unicamp.org'>registration@unicamp.org</a> for more information.</small></p>
        <button data-action='start-over' className='button button--secondary'>&larr; Start over</button>
      </div>

      <div data-step='error' style='display: none'>
        <p>Sorry, we encountered an error. Start a camper registration or reach out to us for more information about rates. Reduced rates are offered automatically during the camper registration process for those who qualify.</p>
        <button data-action='start-over' className='button button--secondary'>&larr; Start over</button>
      </div>
    </div>
  );
}
