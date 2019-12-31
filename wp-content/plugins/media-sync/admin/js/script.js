jQuery(document).ready(function($) {

	var files = $('.main-media-sync-page .media-sync-list-files');
	var tableHolder = files.find('.media-sync-table-holder');

	// When directory checkbox is changed (direct click or running recursively with .trigger())
	files.find('.media-sync-list-file.is-dir .js-checkbox').on('change', function (event, type) {

		// Show loading overlay
		if(type !== "recursive" && !tableHolder.hasClass('is-loading')) {
			tableHolder.addClass('is-loading');
		}

		// Find parent row
		var row = $(this).closest('.media-sync-list-file');
		// Checked or not
		var checked = !!$(this).prop('checked');

		// Fake delay to allow loading to show up immediately (before this)
		setTimeout(function () {

			var childrenCheckboxes = row.siblings('[data-parent-id="' + row.prop('id') + '"]').find('.js-checkbox');

			if (childrenCheckboxes && childrenCheckboxes.length > 0) {

				$.each(childrenCheckboxes, function (index, checkbox) {
					// If not disabled
					if (!$(checkbox).prop('disabled')) {
						// Check / un-check and trigger "change" event to run for inner folders
						$(checkbox).prop('checked', checked).trigger('change', ['recursive']);
					}
				});
			}

			// Update "selected items" counter
			files.find('.js-media-sync-selected-count').html(files.find('.is-file.is-in-db-no input[type="checkbox"]:checked').length);

			// Hide loading overlay
			if(type !== "recursive" && tableHolder.hasClass('is-loading')) {
				tableHolder.removeClass('is-loading');
			}
		}, 0);
	});


	// When clicked on "select all" checkboxes
	var selectAllCheckboxes = files.find('.check-column-all input[type="checkbox"]');
	selectAllCheckboxes.on('click', function(e) {
		// Cancel other stuff added to this element and click event (from WP), because it's quite slow with all of that
		e.stopPropagation();

		// Checked or not
		var checked = !!$(this).prop('checked');

		// Check other "select all" checkbox (there is one at the top and one at the bottom)
		selectAllCheckboxes.prop('checked', checked);

		// Check / un-check all first level items and trigger "change" event to run for inner folders
		$.each(files.find('.media-sync-list-file.level-1 .js-checkbox'), function (index, checkbox) {
			$(checkbox).prop('checked', checked).trigger('change');
		});
	});


	// Update "selected items" counter when clicked on individual files
	files.find('.media-sync-list-file.is-file .js-checkbox').on('click', function () {
		// Update "selected items" counter
		files.find('.js-media-sync-selected-count').html(files.find('.is-file.is-in-db-no input[type="checkbox"]:checked').length);
	});


	// Expand / Collapse folders
	files.find('.media-sync-list-file.is-dir .js-toggle-row').on('click', function () {
		// Find parent row
		var row = $(this).closest('.media-sync-list-file');

		// If it's expanded or not
		var expanded = row.hasClass('with-expanded-children');

		if (expanded) {
			row.removeClass('with-expanded-children');
		} else {
			row.addClass('with-expanded-children');
		}

		// Each child row
		$.each(row.siblings('[data-parent-id="' + row.prop('id') + '"]'), function () {

			// If child is dir with expanded children
			if ($(this).hasClass('is-dir') && $(this).hasClass('with-expanded-children')) {
				// Trigger click to collapse inner children
				$(this).find('.js-toggle-row').trigger('click')
			}

			if (expanded) {
				$(this).removeClass('is-expanded');
			} else {
				$(this).addClass('is-expanded');
			}
		});

	});

});