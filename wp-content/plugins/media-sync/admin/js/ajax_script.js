jQuery(document).ready(function($) {

	var plugin = $('.main-media-sync-page');
	var files = plugin.find('.media-sync-list-files');

	plugin.find('.js-import-selected').on('click', function(e) {
		e.preventDefault();

		console.time('import-selected');

		var btn = $(this);
		var form = files.find('form');
		var dryRun = !!form.find('input[name="dry_run"]').prop('checked');
		var filePostDate = form.find('input[name="file_post_date"]:checked').val();
		var selectedItems = form.find('.is-file.is-in-db-no input[type="checkbox"]:checked');
		var items = selectedItems.map(function(index, checkbox) {
			return {
				'file': $(checkbox).val(),
				'row_id': $(checkbox).attr('data-row-id')
			};
		}).get();
		var total = items.length;
		var batch;
		var counter = 0;

		if(total <= 0) {
			return false;
		}

		// Shouldn't go above 50 because that could reach 30 sec (max was 25 s while testing)
		// Actually, don't go above 10 items per batch
		var batchSize = 1;
		if (total > 10) {
			batchSize = 5;
		}
		if (total > 100) {
			batchSize = 10;
		}
		

		// Reset stuff
		plugin.find('.media-sync-progress').css('width', 0);
		plugin.find('.notice-files-imported').removeClass('is-visible');


		// Clear highlighted rows
		files.find('.media-sync-list-file.highlight-success').removeClass('highlight-success');
		files.find('.media-sync-list-file.highlight-error').removeClass('highlight-error');


		// Disable submit button while request is being executed
		btn.prop('disabled', true);


		// Activate loading icon
		plugin.find('.import-spinner').addClass('is-active');


		// Show progress bar
		plugin.find('.media-sync-progress-holder').addClass('is-visible');


		// Run recursively (to avoid stacking too many "pending" ajax calls)
		runAjax();


		function runAjax() {
			// Take new batch
			batch = items.splice(0, batchSize);

			// If there is something left in batch
			if(batch.length > 0) {

				$.ajax({
					url: ajax_data.ajax_url,
					data: {
						'action': 'media_sync_import_files',
						'security': ajax_data.security,
						'dry_run': dryRun,
						'file_post_date': filePostDate,
						'media_items': batch
					},
					dataType: 'json',
					method: 'POST'
				}).done(function (data) {

					// Run again to go through all batches
					runAjax();

					if (data && data.length > 0) {
						var oldCounter = counter;

						$.each(data, function (index, item) {
							if (item.row_id) {
								var statusClass = 'error';
								if (item.inserted == true) {
									counter++;
									statusClass = 'success';

									console.log("[" + counter + "] Successfully imported: " + item.row_id);
								} else {
									console.log("[x] Error importing: " + item.row_id);
								}

								// Highlight imported or failed row
								files.find('#' + item.row_id).addClass('highlight-' + statusClass);
							}
						});


						// Not really correct progress indicator, it's just animated
						jQuery({Counter: oldCounter}).animate({Counter: counter}, {
							duration: 1000,
							easing: 'linear',
							step: function () {
								// Update "imported" count
								files.find('.js-media-sync-imported-count').html(Math.ceil(this.Counter));
							},
							complete: function () {
								// Update "imported" count again (sometimes it doesn't set correct value above)
								files.find('.js-media-sync-imported-count').html(counter);
							}
						});


						// Update progress bar
						plugin.find('.media-sync-progress').css('width', parseInt((counter / total) * 100) + '%');
					}

					// If all items are imported successfully (last item)
					if (counter == total) {
						// Enable submit button when request completed with any outcome
						btn.prop('disabled', false);

						// Deactivate loading icon
						plugin.find('.import-spinner').removeClass('is-active');

						// Show success message
						plugin.find('.notice-files-imported').addClass('is-visible');

						console.timeEnd('import-selected');
					}
				}).fail(function (jqXHR, textStatus, errorThrown) {
					console.log("FAIL: ");
					console.log(errorThrown);
				});
			}
		}
	});
});