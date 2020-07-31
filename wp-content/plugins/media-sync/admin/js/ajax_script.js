jQuery(document).ready(function($) {
	try {

		var plugin = $('.main-media-sync-page');
		var files = plugin.find('.media-sync-list-files');

		plugin.find('.js-import-selected').on('click', function (e) {
			e.preventDefault();

			var btn = $(this);
			var form = files.find('form');
			var dryRun = !!form.find('input[name="dry_run"]').prop('checked');
			var filePostDate = form.find('input[name="file_post_date"]:checked').val();
			var selectedItems = form.find('.is-file.is-in-db-no input[type="checkbox"]:checked');
			var items = selectedItems && selectedItems.length ? selectedItems.map(function (index, checkbox) {
				return {
					'file': $(checkbox).val(), 'row_id': $(checkbox).attr('data-row-id')
				};
			}).get() : [];
			var total = items.length;
			var batch;
			var batchCount = 0;
			var counter = 0;

			if (total <= 0) {
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


			// Show progress bar
			plugin.find('.media-sync-progress-holder').addClass('is-visible');


			function setActiveStatus(isActive) {
				if(isActive) {
					// Disable submit button while request is being executed
					btn.prop('disabled', true);

					// Activate loading icon
					plugin.find('.import-spinner').addClass('is-active');
				} else {
					// Enable submit button
					btn.prop('disabled', false);

					// Deactivate loading icon
					plugin.find('.import-spinner').removeClass('is-active');
				}
			}


			function runAjax() {
				// Take new batch
				batch = items.splice(0, batchSize);

				// If there is something left in batch
				if (batch.length > 0) {

					batchCount++;

					$.ajax({
						url: ajax_data.ajax_url + '?mediaSyncBatch=' + batchCount,
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

						if (data && data.length > 0) {

							$.each(data, function (index, item) {
								if (item.row_id) {
									var statusClass = 'error';

									if (item.inserted === true) {
										counter++;
										statusClass = 'success';

										console.log("[Media Sync][" + counter + "] " + (dryRun ? "DRY RUN: " : "Successfully imported: ") + item.row_id);
									} else {
										console.error("[Media Sync] Error importing: " + item.row_id);
									}

									try {
										// Highlight imported or failed row
										files.find('[id="' + item.row_id + '"]').addClass('highlight-' + statusClass);
									} catch (highlightError) {
										console.log('[Media Sync] Could not highlight imported row.', highlightError);
									}
								}
							});

							var animatedCounter = counter;

							// Not really correct progress indicator, it's just animated
							jQuery({Counter: animatedCounter}).animate({Counter: counter}, {
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
							plugin.find('.media-sync-progress').css('width', ((counter / total) * 100) + '%');
						}

						// If all items are imported successfully (last item)
						if (counter === total) {

							setActiveStatus(false);

							// Show success message
							plugin.find('.notice-files-imported').addClass('is-visible');
						}

						// Run again to go through all batches
						// It's a recursive call to avoid stacking too many "pending" ajax calls,
						// but async/await or Promise would be much better
						runAjax();

					}).fail(function (jqXHR, textStatus, errorThrown) {
						console.error("[Media Sync][Import]: " + textStatus, errorThrown);
						alert("[Media Sync] " + textStatus + "\nE:\n" + errorThrown);
						setActiveStatus(false);
					});
				}
			}

			setActiveStatus(true);

			// Run recursively (to avoid stacking too many "pending" ajax calls)
			runAjax();

		});
	} catch (e) {
		console.error('[Media Sync]', e);
		alert("[Media Sync]\n" + e);
	}
});