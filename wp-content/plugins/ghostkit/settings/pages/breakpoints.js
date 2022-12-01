/**
 * External dependencies
 */
import ApplyFilters from '../../gutenberg/components/apply-filters';

/**
 * WordPress dependencies
 */
const { Component } = wp.element;

const { ExternalLink } = wp.components;

const { __ } = wp.i18n;

export default class BreakpointSettings extends Component {
  render() {
    return (
      <ApplyFilters name="ghostkit.breakpoints.settings" props={this.props}>
        <div className="ghostkit-settings-content-wrapper ghostkit-settings-breakpoints">
          {__(
            'Breakpoints available for Pro users only. Read more about Ghost Kit Pro plugin here - ',
            'ghostkit'
          )}
          <ExternalLink href="https://ghostkit.io/pricing/?utm_source=plugin&utm_medium=settings&utm_campaign=breakpoints&utm_content=2.24.1">
            https://ghostkit.io/pricing/
          </ExternalLink>
        </div>
      </ApplyFilters>
    );
  }
}
