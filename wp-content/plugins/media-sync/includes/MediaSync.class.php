<?php

/**
 * Media Sync
 *
 * This class is used for generating main content and also to import files to database
 *
 * @package     MediaSync
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       0.1.0
 * @author      Erol Živina
 */
if ( !class_exists( 'MediaSync' ) ) :

    class MediaSync
    {

        /**
         * Since PHP on Windows Server recognizes both backslash ("\") or forward slash ("/"),
         * and WordPress always uses forward slashes (in it's built in functions),
         * we'll also always use forward slashes to solve various issues when using Windows Server.
         */
        const MEDIA_SYNC_DS = '/';

        /**
         * Absolute path to main "uploads" directory.
         *
         * @var null
         */
        static $upload_dir_path = null;

        /**
         * Files already in Media Library.
         *
         * @var null|array
         */
        static $files_in_db = null;

        /**
         * For showing passed time when debugging.
         *
         * @since 1.2.0
         * @var null|string
         */
        static $start_time = null;


        /**
         * Render main plugin content
         *
         * @since 0.1.0
         * @return void
         */
        static public function media_sync_main_page()
        {

            if(!MediaSync::media_sync_user_has_general_access()) {
                wp_die(__('You do not have sufficient permissions to access this page.', 'media-sync'));
            }

            if(self::media_sync_is_debug()) {
                @ini_set('display_errors', 1);
            }

            // 512 MB
            @ini_set('memory_limit', '512M');

            // 5 min
            @ini_set('max_execution_time', '300');


            $scan_files = isset($_GET['scan_files']) && $_GET['scan_files'] == true;
            $associated_filter = isset($_GET['associated-filter']) && !empty($_GET['associated-filter']) ? explode(':', urldecode($_GET['associated-filter'])) : null;
            $missing_from_ml = $associated_filter && $associated_filter[0] == 'missing_from' && $associated_filter[1] == 'media_library';

            $here = esc_url(get_admin_url(null, 'upload.php?page=media-sync-page'));

            $upload_dir_path = self::media_sync_get_uploads_basedir();
            $relative_path = self::media_sync_get_relative_path($upload_dir_path);
            $no_upload_dir_message = __('Scan directory not found. Please check settings.', 'media-sync');
            ?>

            <div class="wrap main-media-sync-page" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
                <h1><?= __('Media Sync', 'media-sync') ?></h1>

                <?php do_action('media_sync_extended_initial_notice'); ?>

                <div class="notice notice-error hidden media-sync-global-errors js-media-sync-error-placeholder"></div>

                <?php if ($scan_files) : ?>
                    <div class="notice notice-error">
                        <p><?= __('Please backup your database! This plugin makes database changes.', 'media-sync') ?></p>
                    </div>
                    <div class="notice notice-success notice-files-imported">
                        <p><?= sprintf(__('Done! Highlighted files were successfully imported. %s to see changes.', 'media-sync'),
                                '<a href="'.add_query_arg('scan_files', 1, $here).'">'.__('Re-scan', 'media-sync').'</a>') ?></p>
                    </div>
                <?php endif; ?>

                <div class="media-sync-list-files">
                    <form action="<?= $here ?>" method="GET">
                        <input type="hidden" name="page" value="media-sync-page"/>
                        <input type="hidden" name="scan_files" value="<?= $scan_files ?>"/>
                        <div class="media-sync-buttons-holder">
                            <?php if (!$scan_files) : ?>
                                <div class="card">
                                    <h2 class="title"><?= __('Sync - uploads directory', 'media-sync') ?></h2>

                                    <?php if($upload_dir_path) : ?>
                                        <a class="button button-primary" href="<?= add_query_arg('scan_files', 1, $here) ?>">
                                            <?= __('Scan Files', 'media-sync') ?>
                                        </a>

                                        <p class="media-sync-scan-files-message">
                                            <?= sprintf(__('Use this to see content of upload dir: %s and import files to Media Library.', 'media-sync'),
                                                '<code title="'.$upload_dir_path.'">'.$relative_path.'</code>') ?>
                                        </p>
                                    <?php else: ?>
                                        <p><i><?= $no_upload_dir_message ?></i></p>
                                    <?php endif; ?>
                                </div>
                                <div class="card">
                                    <h2 class="title"><?= __('Sync - Media Library', 'media-sync') ?></h2>
                                    <a class="button button-primary" href="<?= add_query_arg('media_sync_missing_files', 'yes', get_admin_url(null, 'upload.php')) ?>">
                                        <?= __('Filter Media Library', 'media-sync') ?>
                                    </a>

                                    <p class="media-sync-scan-files-message">
                                        <?= __('Use this to see Media Library items that are missing actual files. This takes you to Media Library but with custom filter.', 'media-sync') ?>
                                    </p>
                                </div>
                            <?php endif; ?>

                            <?php if ($scan_files) : ?>
                                <div class="media-sync-button-holder">
                                    <a class="button button-primary" href="<?= add_query_arg('scan_files', 1, $here) ?>">
                                        <?= __('Re-scan', 'media-sync') ?>
                                    </a>
                                </div>

                                <div class="media-sync-button-holder">
                                    <button class="button button-primary js-import-selected"><?= __('Import Selected', 'media-sync') ?></button>
                                    <span class="spinner import-spinner"></span>
                                </div>

                                <div class="import-options">
                                    <?php if ( !!get_option( 'ms_sg_use_dry_run', 1 ) ) : ?>
                                        <div class="media-sync-dry-run-holder">
                                            <input type="checkbox" id="dry-run" name="dry_run" checked="checked" />
                                            <label for="dry-run"><?= __('Dry Run (test without making database changes)', 'media-sync') ?></label>
                                        </div>
                                    <?php else: ?>
                                        <input type="hidden" name="dry_run" value="" />
                                    <?php endif; ?>

                                    <div class="import-option-date-type">
                                        <label><?= __('Date/time to set for newly imported files', 'media-sync') ?>:</label>
                                        <?php self::media_sync_render_post_date_option( 'file_post_date' ) ?>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </div>

                        <?php if ($scan_files) : ?>
                            <p class="media-sync-state-holder">
                                <span class="media-sync-progress-holder">
                                    <span class="media-sync-progress"></span>
                                </span>
                                <span class="media-sync-state">
                                    <span class="media-sync-state-text">
                                        <?= __('Imported', 'media-sync') ?>
                                    </span>
                                    <span class="media-sync-state-number media-sync-imported-count js-media-sync-imported-count">0</span>
                                    <span class="media-sync-state-text">
                                        <?= __('out of', 'media-sync') ?>
                                    </span>
                                    <span class="media-sync-state-number media-sync-selected-count js-media-sync-selected-count">0</span>
                                    <span class="media-sync-state-text">
                                        <?= __('selected items', 'media-sync') ?>
                                    </span>
                                </span>
                                <span class="media-sync-state media-sync-state-note">
                                    <?= __('Files already in Media Library will be skipped during import', 'media-sync') ?>
                                </span>
                            </p>

                            <div class="wp-filter">
                                <div class="filter-items">
                                    <label for="associated-filter" class="screen-reader-text"><?= __('Filter by type', 'media-sync') ?></label>
                                    <select class="associated-filters" name="associated-filter" id="associated-filter">
                                        <option value=""><?= __('All files', 'media-sync') ?></option>
                                        <option value="missing_from:media_library"<?= $missing_from_ml ? 'selected="selected"' : '' ?>>
                                            <?= __('Only files missing from Media Library', 'media-sync') ?>
                                        </option>
                                    </select>

                                    <div class="actions">
                                        <input type="submit" name="filter_action" id="post-query-submit" class="button" value="<?= __('Filter', 'media-sync') ?>">
                                    </div>
                                </div>
                            </div>

                            <?php
                            $tree = $upload_dir_path ? self::media_sync_get_list_of_uploads() : array();
                            $current_dir = get_option( 'ms_sg_scan_sub_dir' ) ? $relative_path : null;
                            ?>
                            <?php if (!empty($tree)) : ?>
                                <div class="media-sync-table-holder">
                                    <table class="wp-list-table widefat fixed media">
                                        <?php self::media_sync_render_thead_tfoot_row('thead', $current_dir) ?>
                                        <tbody id="the-list">
                                        <?php foreach ($tree as $item) : ?>
                                            <?php self::media_sync_render_row($item) ?>
                                        <?php endforeach; ?>
                                        </tbody>
                                        <?php self::media_sync_render_thead_tfoot_row('tfoot') ?>
                                    </table>
                                    <span class="spinner is-active table-spinner"></span>
                                </div>

                                <?php
                                self::media_sync_render_debug_stats('after table render');
                                ?>
                            <?php else : ?>
                                <p class="media-sync-no-results">
                                    <?php if ($missing_from_ml) : ?>
                                        <?= __('Everything seems fine here, there are no files that are not already in your Media Library.', 'media-sync') ?>
                                    <?php elseif(!$upload_dir_path) : ?>
                                        <?= $no_upload_dir_message ?>
                                    <?php else : ?>
                                        <?= __('No Results', 'media-sync') ?>
                                    <?php endif; ?>
                                </p>
                            <?php endif; ?>
                        <?php endif; ?>
                    </form>
                </div>
            </div>

            <?php
        }


        /**
         * Prepare plugin settings
         *
         * @since 1.1.0
         * @return void|boolean
         */
        static public function media_sync_options_setup()
        {
            if ( !current_user_can( 'manage_options' ) ) {
                return false;
            }

            // From this plugin
            add_option( 'ms_sg_scan_sub_dir', '' );
            add_option( 'ms_sg_use_dry_run', 1 );
            add_option( 'ms_sg_file_post_date', 'default' );
            add_option( 'ms_sg_use_debug', 0 );
            register_setting( 'media-sync-settings-group', 'ms_sg_scan_sub_dir' );
            register_setting( 'media-sync-settings-group', 'ms_sg_use_dry_run' );
            register_setting( 'media-sync-settings-group', 'ms_sg_file_post_date' );
            register_setting( 'media-sync-settings-group', 'ms_sg_use_debug' );

            // From Add-On
            do_action('media_sync_extended_advanced_options_register');
        }


        /**
         * Render plugin settings
         *
         * @since 1.1.0
         * @return void|boolean
         */
        static public function media_sync_options_page()
        {
            if ( !current_user_can( 'manage_options' ) ) {
                return false;
            }
            ?>
            <div class="wrap media-sync-page-settings">
                <h1><?= __('Media Sync Settings', 'media-sync') ?></h1>

                <form method="post" action="options.php">
                    <?php 
                    // From this plugin
                    settings_fields( 'media-sync-settings-group' );
                    do_settings_sections( 'media-sync-settings-group' );
                    ?>

                    <table class="form-table">
                        <tbody>
                            <?php 
                            // From this plugin
                            ?>
                            <tr>
                                <th scope="row">
                                    <label for="ms-sg-scan-sub-dir"><?= __('Scan directory', 'media-sync') ?></label>
                                </th>
                                <td>
                                    <fieldset>
                                        <?php
                                        $upload_dir_path = self::media_sync_get_uploads_basedir(false);
                                        // Since this path is always using forward slashes, we're also adding forward slash ("/")
                                        $relative_path = self::media_sync_get_relative_path($upload_dir_path) . self::MEDIA_SYNC_DS;
                                        ?>
                                        <span><?= $relative_path ?></span>
                                        <input type="text" value="<?= get_option( 'ms_sg_scan_sub_dir' ) ?>" name="ms_sg_scan_sub_dir" id="ms-sg-scan-sub-dir" />
                                    </fieldset>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label><?= __('Dry Run', 'media-sync') ?></label>
                                </th>
                                <td>
                                    <fieldset>
                                        <label for="ms-sg-use-dry-run">
                                            <?php $checked = checked( 1, get_option( 'ms_sg_use_dry_run' ), false ); ?>
                                            <input type="checkbox" name="ms_sg_use_dry_run" id="ms-sg-use-dry-run" value="1" <?= $checked ?>>
                                            <?= __('Show "Dry Run" option', 'media-sync') ?>
                                        </label>
                                    </fieldset>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label><?= __('Preselected / default value for file date', 'media-sync') ?></label>
                                </th>
                                <td>
                                    <?php self::media_sync_render_post_date_option( 'ms_sg_file_post_date' ) ?>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <label><?= __('Turn on debugging', 'media-sync') ?></label>
                                </th>
                                <td>
                                    <fieldset>
                                        <label for="ms-sg-use-debugging">
                                            <?php $checked = checked( 1, get_option( 'ms_sg_use_debug' ), false ); ?>
                                            <input type="checkbox" name="ms_sg_use_debug" id="ms-sg-use-debugging" value="1" <?= $checked ?>>
                                        </label>
                                    </fieldset>
                                </td>
                            </tr>
                            <?php
                            // From Add-On
                            do_action('media_sync_extended_advanced_options_render');
                            ?>
                        </tbody>
                    </table>

                    <?php submit_button(); ?>
                </form>
            </div>
            <?php
        }


        /**
         * Render option for selecting post date
         *
         * @since 1.1.0
         * @param string $name Field name
         * @return void
         */
        static public function media_sync_render_post_date_option($name)
        {
            $selected = get_option( 'ms_sg_file_post_date' );

            if(isset($_GET['file_post_date'])) { 
                $selected = $_GET['file_post_date'];
            }
            ?>
            <fieldset>
                <div class="import-option-date-type-item">
                    <label>
                        <input type="radio" name="<?= $name ?>" value="default" <? checked( 'default', $selected ) ?>> 
                        <span><?= __('Default', 'media-sync') ?></span>
                    </label>
                    <p class="description"><?= __('Defaults to what WordPress uses - current time.', 'media-sync') ?></p>
                </div>
                <div class="import-option-date-type-item">
                    <label>
                        <input type="radio" name="<?= $name ?>" value="file_time" <? checked( 'file_time', $selected ) ?>> 
                        <span><?= __('File time', 'media-sync') ?></span>
                    </label>
                    <p class="description"><?= __('File modification timestamp - when it was last modified.', 'media-sync') ?></p>
                </div>
                <div class="import-option-date-type-item">
                    <label>
                        <input type="radio" name="<?= $name ?>" value="smart_file_time" <? checked( 'smart_file_time', $selected ) ?>> 
                        <span><?= __('Smart file time', 'media-sync') ?></span>
                    </label>
                    <p class="description"><?= sprintf(__('If file timestamp does not match the folder in which it is - it will construct the date/time based on the folder: %s.', 'media-sync'), '{year}-{month}-01 00:00:00') ?></p>
                </div>
            </fieldset>
            <?php
        }


        /**
         * Render table header and footer
         *
         * @since 0.1.0
         * @param string $tag [thead|tfoot]
         * @param string $dir
         * @return void
         */
        static public function media_sync_render_thead_tfoot_row($tag, $dir = null)
        {
            $cb_id = 'cb-select-all-' . ($tag == 'thead' ? '1' : '2');
            ?>
            <<?= $tag ?>>
                <tr>
                    <td class="manage-column check-column check-column-all"<?= $tag == 'thead' ? ' id="cb"':''?>>
                        <label class="screen-reader-text" for="<?= $cb_id ?>"><?= __('Select All', 'media-sync') ?></label>
                        <input id="<?= $cb_id ?>" type="checkbox">
                    </td>
                    <th scope="col" class="manage-column column-title column-primary"<?= $tag == 'thead' ? ' id="title"':''?>>
                        <span><?= __('File', 'media-sync') ?> <?= $dir ? (__('at', 'media-sync') . ' ' . $dir) : '' ?></span>
                    </th>
                </tr>
            </<?= $tag ?>>
            <?php
        }


        /**
         * Render table row for each file or directory
         *
         * @since 0.1.0
         * @param array $item
         * @return void
         */
        static public function media_sync_render_row($item)
        {
            $has_file_id = isset($item['file_id']) && $item['file_id'] !== false;
            $url = $has_file_id ? esc_url(add_query_arg(array('post' => $item['file_id'], 'action' => 'edit'), get_admin_url(null, 'post.php'))) : $item['url'];
            $url_attr = $item['is_dir'] !== true ? ' target="_blank"' : '';
            $count_children = $item['count_children'];

            $cls = 'media-sync-list-file';
            $cls .= ' is-' . ($item['is_dir'] === true ? 'dir' : 'file');
            $cls .= ' level-' . $item['level'];
            $cls .= ' is-first-level-' . ($item['level'] === 1 ? 'yes' : 'no');
            if ($item['is_dir'] !== true) {
                $cls .= ' is-in-db-' . ($has_file_id ? 'yes' : 'no');
            }

            // This can be made optional, for a bit different UI
            $toggle_arrows = true;
            if ($toggle_arrows) {
                $is_link = $item['is_dir'] !== true;
                $cls .= ' toggle-arrows-yes';
            } else {
                $is_link = $item['is_dir'] !== true || $count_children > 0;
                $url_attr .= ' class="js-toggle-row"';
            }

            $is_trash = isset($item['file_status']) && $item['file_status'] === 'trash';

            $row_id = "media-sync-item-" . $item['alias'];
            ?>

            <tr class="<?= $cls ?>" id="<?= $row_id ?>" data-parent-id="media-sync-item-<?= $item['parent_alias'] ?>">
                <th scope="row" class="check-column">
                    <label class="screen-reader-text" for="cb-select-<?= $item['alias'] ?>"></label>
                    <input type="checkbox" class="js-checkbox" id="cb-select-<?= $item['alias'] ?>"
                           value="<?= $item['absolute_path'] ?>" data-row-id="<?= $row_id ?>">
                </th>
                <td class="title column-title has-row-actions column-primary" data-colname="<?= __('File', 'media-sync') ?>">
                    <?php if (!empty($item['parents'])) : ?>
                        <span class="media-sync-parents">
                            <?php foreach ($item['parents'] as $parent_key => $parent) : ?>
                                <?php
                                $parent_cls = 'media-sync-parent';
                                $parent_cls .= ' is-first-' . ($parent_key == 0 ? 'yes' : 'no');
                                $parent_cls .= ' is-last-' . ($parent_key + 1 == count($item['parents']) ? 'yes' : 'no');
                                ?>
                                <span class="<?= $parent_cls ?>"><i></i></span>
                            <?php endforeach; ?>
                            <span class="clearfix"></span>
                        </span>
                    <?php endif; ?>

                    <?php if ($toggle_arrows && $item['is_dir'] === true) : ?>
                        <span class="js-toggle-row media-sync-toggle-row dashicons"></span>
                    <?php endif; ?>

                    <?= $is_link ? '<a href="' . $item['url'] . '"' . $url_attr . '>' : '' ?>
                    <?php if ($item['is_dir'] === true) : ?>
                        <span class="dashicons dashicons-category"></span>
                    <?php endif; ?>
                        <span class="media-sync-file-name">
                            <?= $item['display_name'] ?>
                        </span>
                    <?= $is_link ? '</a>' : '' ?>

                    <?php if ($item['is_dir'] === true && $count_children !== null) : ?>
                        <span class="media-sync-num-items"><?= sprintf('(%u %s)', $count_children, $count_children == 1 ? __('item', 'media-sync') : __('items', 'media-sync')) ?></span>
                    <?php endif; ?>

                    <?php if ($has_file_id) : ?>
                        <span class="media-sync-already-in-db"> - <?= __('Already in', 'media-sync') ?>
                            <a href="<?= $url ?>" class="dashicons dashicons-admin-media" target="_blank"></a>
                            <?= $is_trash ? ' (' . __('In Trash', 'media-sync') . ')' : '' ?>
                        </span>
                    <?php endif; ?>
                </td>
            </tr>

            <?php
            if (!empty($item['children'])) :
                foreach ($item['children'] as $child_item) :
                    self::media_sync_render_row($child_item);
                endforeach;
            endif;
        }


        /**
         * Ajax action to import selected files
         *
         * @since 0.1.0
         * @return string
         */
        static public function media_sync_import_files()
        {
            if(!MediaSync::media_sync_user_has_general_access()) {
                wp_die(__('You do not have sufficient permissions to access this page.', 'media-sync'));
            }

            check_ajax_referer( 'media_sync_import_files', 'security' );

            // Get database stuff
            global $wpdb;

            $result = array();

            if(isset($_POST['media_items']) && !empty($_POST['media_items'])) {

                // Make sure that this file is included, as wp_generate_attachment_metadata() depends on it.
                require_once( ABSPATH . 'wp-admin' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR . 'image.php' );


                $files_in_db = self::media_sync_get_files_in_db();


                $post_date_type = isset($_POST['file_post_date']) ? $_POST['file_post_date'] : get_option( 'ms_sg_file_post_date', 'default' );
                $dry_run = isset($_POST['dry_run']) && json_decode($_POST['dry_run']) === true;

                foreach ($_POST['media_items'] as $media_item) {

                    if(isset($media_item['file']) && !empty($media_item['file'])) {

                        // This comes from JS and it's taken from checkbox value, which is $item['absolute_path'] from media_sync_get_list_of_files()
                        $absolute_path = urldecode($media_item['file']);
                        $relative_path = self::media_sync_get_relative_path($absolute_path);

                        // It's quicker to get all files already in db and check that array, than to do this query for each file
                        // $query = "SELECT COUNT(*) FROM {$wpdb->posts} WHERE guid LIKE '%{$relative_path}'";
                        // $is_in_db = intval($wpdb->get_var($query)) > 0;

                        $is_in_db = isset($files_in_db[$relative_path]) && !empty($files_in_db[$relative_path]);

                        // Check if file is already in database
                        if(!$is_in_db) {

                            // Prepare data to be saved to `wp_posts` and `wp_postmeta`
                            $attachment = self::media_sync_prepare_attachment_data($absolute_path, $relative_path, $post_date_type);

                            if (!$attachment || isset($attachment['error']) || isset($attachment['errorMessage'])) {
                                // It's probably better to just continue importing other files
                                // echo json_encode($attachment);
                                // wp_die();

                                // This will mark this file as failed and show error below file name
                                $result[] = array(
                                    'row_id' => $media_item['row_id'],
                                    'inserted' => false,
                                    'error' => isset($attachment['error']) ? $attachment['error'] : null,
                                    'errorMessage' => isset($attachment['errorMessage']) ? $attachment['errorMessage'] : null
                                );
                                continue;
                            }

                            // If we're actually importing (creating database records)
                            if(!$dry_run) {

                                // Import file to database (`wp_posts` and `wp_postmeta`)
                                $import_response = self::media_sync_update_import_to_database($attachment, $absolute_path);

                                // Response is an array if there are errors or true if success
                                $is_inserted = $import_response === true;

                                // It's probably better to just continue importing other files
                                //if (!$is_inserted) {
                                //    echo json_encode($import_response);
                                //    wp_die();
                                //}

                                $result[] = array(
                                    'row_id' => $media_item['row_id'],
                                    'inserted' => $is_inserted,
                                    'error' => isset($import_response['error']) ? $import_response['error'] : null,
                                    'errorMessage' => isset($import_response['errorMessage']) ? $import_response['errorMessage'] : null
                                );
                            } else {
                                $result[] = array(
                                    'row_id' => $media_item['row_id'],
                                    'inserted' => true
                                );
                            }
                        }
                    }
                }
            }

            echo json_encode(array(
                'results' => $result
            ));

            wp_die(); // Must have for Ajax calls
        }

        /**
         * Find mime type for file being imported
         *
         * @since 1.2.3
         *
         * @param string $absolute_path Absolute path to the file being imported
         * @return string|array
         */
        static public function media_sync_get_mime_type($absolute_path)
        {
            try {
                $mime_type = '';
                if (function_exists('mime_content_type')) {
                    $mime_type = mime_content_type($absolute_path);
                }

                if (!empty($mime_type)) {
                    return $mime_type;
                }

                $file_type = wp_check_filetype(basename($absolute_path), null);

                if(!$file_type['type']) {
                    return array(
                        'errorMessage' => sprintf(__('Invalid mime type for file: %s.', 'media-sync'), $absolute_path),
                    );
                }

                return $file_type['type'];

            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error getting mime type for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }
        }

        /**
         * Prepare data to be imported to `wp_posts` table
         *
         * @since 1.2.2
         *
         * @param string $absolute_path Absolute path to the file being imported
         * @param string $relative_path Path relative to the site URL
         * @param string $post_date_type How to generate post date
         * @return array
         */
        static public function media_sync_prepare_attachment_data($absolute_path, $relative_path, $post_date_type)
        {
            try {
                $mime_type = self::media_sync_get_mime_type($absolute_path);

                if (isset($mime_type['error']) || isset($mime_type['errorMessage'])) {
                    return $mime_type;
                }

                // Prepare an array of post data for the attachment.
                $attachment = array(
                    'guid'           => get_site_url() . $relative_path,
                    'post_mime_type' => $mime_type,
                    'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $relative_path ) ),
                    'post_content'   => '',
                    'post_status'    => 'inherit'
                );

                // Try to get post date based on settings - "Default" option will not set anything, so WP can use defaults
                $post_date = self::media_sync_post_date($absolute_path, $post_date_type);

                if(!empty($post_date)) {
                    $attachment['post_date'] = $post_date;
                    $attachment['post_date_gmt'] = $post_date;
                }

                return $attachment;
            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error preparing attachment data for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }
        }


        /**
         * Returns post date for file being imported based on selected option
         *
         * @since 1.2.1
         *
         * @param array $attachment Data for `wp_posts` table
         * @param string $absolute_path Absolute path to the file being imported
         * @return array|true
         */
        static public function media_sync_update_import_to_database($attachment, $absolute_path)
        {
            if (!stream_resolve_include_path($absolute_path)) {
                return array(
                    'errorMessage' => sprintf(__('File to import not found at path: %s.', 'media-sync'), $absolute_path)
                );
            }

            // Insert the attachment.
            try {
                $attach_id = wp_insert_attachment($attachment, $absolute_path);
            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error inserting attachment (`wp_posts` table) for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }

            if (!($attach_id > 0)) {

                // TODO: Revert wp_insert_attachment()?

                return array(
                    'errorMessage' => sprintf(__('Attach ID not received for inserted attachment (`wp_posts` table) for file: %s.', 'media-sync'), $absolute_path)
                );
            }

            try {
                // Generate the metadata for the attachment, and update the database record.
                $attach_data = wp_generate_attachment_metadata($attach_id, $absolute_path);
            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error generating attachment metadata (`wp_postmeta` table) for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }

            if (!$attach_data || empty($attach_data)) {
                return array(
                    'errorMessage' => sprintf(__('Attachment metadata could not be generated from %s.', 'media-sync'), $absolute_path),
                    'error' => json_encode($attachment)
                );
            }

            try {
                /**
                 * Apply this filter to collect additional metadata and/or to run some additional actions,
                 * e.g. to "auto-connect" items to pages, posts, and WooCommerce products.
                 * Returning empty data will skip updating metadata (wp_update_attachment_metadata),
                 * so this filter can also be used to totally overwrite updating attachment metadata.
                 *
                 * This filter can be used in a number of different ways:
                 * 1. to collect additional metadata,
                 * 2. to run some additional custom actions
                 *   (e.g. to "auto-connect" items to pages, posts, and WooCommerce products),
                 * 3. to skip or completely overwrite updating the metadata (`wp_update_attachment_metadata` function),
                 *   when this filter returns empty data (null).
                 *
                 * NOTE:
                 * Things could break if the filter doesn't return proper attach data
                 * and it hasn't created/updated the `wp_postmeta` table record (meta_key _wp_attachment_metadata).
                 *
                 * @since 1.2.5
                 *
                 * @param array $attach_data Data received from WP function: wp_generate_attachment_metadata
                 * @param int $attach_id
                 * @return array|null
                 */
                $attach_data = apply_filters('media_sync_filter_before_update_metadata', $attach_data, $attach_id);
            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error processing filter media_sync_filter_before_update_metadata for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }

            // There is this same validation (if) before "media_sync_filter_before_update_metadata" filter,
            // so if we end up here, it's because of that filter. Which either already updated metadata,
            // or doesn't want to update it (basically telling us not to run wp_update_attachment_metadata).
            if (!$attach_data || empty($attach_data)) {
                return true;
            }

            try {
                wp_update_attachment_metadata($attach_id, $attach_data);
            } catch (Exception $e) {
                return array(
                    'errorMessage' => sprintf(__('Error updating attachment metadata (`wp_postmeta` table) for file: %s.', 'media-sync'), $absolute_path),
                    'error' => $e->getMessage()
                );
            }

            return true;
        }


        /**
         * Returns post date for file being imported based on selected option
         * 
         * @since 1.1.0
         * @param string $file_path Absolute path to file being imported
         * @param string $type Selected option telling which date to find [default|file_time|smart_file_time]
         * @return string
         */
        static public function media_sync_post_date($file_path, $type)
        {
            // Default is empty string so that WordPress can set its default value (current date)
            $post_date = '';

            try {

                // Take "time modified" of file being imported
                $file_timestamp = filemtime( $file_path );
                if($file_timestamp) {

                    // Convert to datetime
                    $file_time = date( 'Y-m-d H:i:s', $file_timestamp );
                    if($file_time) {

                        // For "File time" option - return file time
                        if($type === 'file_time') {
                            $post_date = $file_time;
                        }

                        // For "Smart file time" option - determine post date by comparing file's modified date with folder in which it is
                        if($type === 'smart_file_time') {
                            // Use file time as a fallback
                            $post_date = $file_time;

                            // Compare the file date with the folder date structure
                            // Try to extract year and month from file path (e.g. "2020/02" or "2020\02")
                            // But this path is now always using forward slash (even on Windows Server), so we can again use just '/(\d{4})\/(\d{2})/'
                            preg_match('/(\d{4})[\/|\\\\](\d{2})/', $file_path, $matches);
                            if ( !empty($matches) ) {
                                $year_and_month = $matches[1] . '-' . $matches[2];
                                $folder_time = $year_and_month . '-' . '01' . ' 00:00:00';

                                // If what we found for folder date is a date (double check for regex above)
                                if ( date('Y-m-d H:i:s', strtotime( $folder_time )) == $folder_time ) {

                                    // If file's year and month values do not match with folder's year and month
                                    if ( date( 'Y-m', $file_timestamp ) != $year_and_month ) {
                                        // Use the folder date instead
                                        $post_date = $folder_time;
                                    }
                                }
                            }
                        }
                    }
                }


                // Receive external function for setting custom post date
                $external = apply_filters('media_sync_filter_post_date', $post_date, $file_path, $type );

                // Return received custom post date if it's empty string or a date
                if( is_string($external) && ($external === '' || ( date('Y-m-d H:i:s', strtotime( $external )) == $external) ) ) {
                    $post_date = $external;
                }

                return $post_date;
            } catch ( Exception $e ) {
                return $post_date;
            }
        }


        /**
         * Get path of directory used by this plugin as main import directory (uploads dir).
         *
         * Since PHP on Windows Server recognizes both backslash ("\") or forward slash ("/"),
         * and WordPress always uses forward slashes (in it's built in functions), we'll also always use forward slashes.
         *
         * So "C:\www\WP/wp-content/uploads" becomes "C:/www/WP/wp-content/uploads"
         *
         * Returning for example:
         * * /var/www/WP/wp-content/uploads
         * * C:/www/WP/wp-content/uploads
         *
         * @since 1.1.3
         * @param boolean $append_sub_dir Should we append sub dir from settings
         * @return string
         */
        static private function media_sync_get_uploads_basedir($append_sub_dir = true)
        {
            $upload_dir = wp_upload_dir();

            if(!($upload_dir && isset($upload_dir['basedir']) && !empty($upload_dir['basedir']))) {
                return null;
            }

            // Convert backslashes ("\") to forward slashes ("/")
            $basedir = wp_normalize_path($upload_dir['basedir']);

            // Append sub dir from settings
            $sub_dir = get_option( 'ms_sg_scan_sub_dir' );
            if($append_sub_dir === true && $sub_dir && !empty($sub_dir)) {

                // Add one forward slash between base dir and sub dir
                $base_with_sub = $basedir . self::MEDIA_SYNC_DS . trim($sub_dir);

                // Return only if exists
                if( stream_resolve_include_path($base_with_sub) ) {
                    return $base_with_sub;
                } else {
                    return null;
                }
            }

            return $basedir;
        }


        /**
         * Get path absolute to WP root. Always using forward slashes ("/").
         *
         * e.g. /var/www/WP/wp-content/uploads -> /wp-content/uploads
         * e.g. C:/www/WP/wp-content/uploads -> /wp-content/uploads
         *
         * @since 1.1.3
         * @param string $absolute_path Absolute file path. Will be convert to forward slashes ("/").
         * @return string
         */
        static private function media_sync_get_relative_path($absolute_path)
        {
            // Since get_home_path() and WP in general always use forward slashes, we need to convert it as well
            $absolute_path = wp_normalize_path($absolute_path);

            // Always using forward slash ("/")
            return str_replace(get_home_path(), self::MEDIA_SYNC_DS, $absolute_path);
        }


        /**
         * Scan "uploads" directory and return recursive list of files and directories
         *
         * @since 0.1.0
         * @return Generator
         */
        static private function media_sync_get_list_of_uploads()
        {
            self::$start_time = microtime(true);

            self::$upload_dir_path = self::media_sync_get_uploads_basedir();
            if(!self::$upload_dir_path) {
                return array();
            }

            // Limit scanning to specific sub folder or encoded path (e.g. &sub_dir=2020%2F01)
            if(isset($_GET['sub_dir']) && !empty($_GET['sub_dir'])) {
                // Since this path is always using forward slashes, we're also using forward slash ("/")
                self::$upload_dir_path = self::$upload_dir_path . self::MEDIA_SYNC_DS . urldecode($_GET['sub_dir']);
            }

            if(empty(self::$files_in_db)) {
                self::$files_in_db = self::media_sync_get_files_in_db();
            }

            $associated_filter = isset($_GET['associated-filter']) && !empty($_GET['associated-filter']) ? explode(':', urldecode($_GET['associated-filter'])) : null;


            // Clear cached files (affecting file_exists, stream_resolve_include_path, etc.)
            clearstatcache();

            // Show debugging stats if debugging is turned on
            self::media_sync_render_debug_stats('before uploads directory scan');

            // Get all files - returning Generator (not Array)
            $tree = self::media_sync_get_list_of_files(self::$upload_dir_path, self::$files_in_db, $associated_filter);

            // Show debugging stats if debugging is turned on
            self::media_sync_render_debug_stats('after uploads directory scan');

            return $tree;
        }


        /**
         * Scan directory (passed as first value) and return recursive list of files and directories
         *
         * @since 0.1.0
         * @param string $current_dir_path Changing recursively for each directory that gets iterated
         * @param array $files_in_db List of files that are already in database
         * @param string $associated_filter Filter by "association", for now it can only be "file missing from media library" (solved by "Import Selected")
         * @return Generator
         */
        static private function media_sync_get_list_of_files($current_dir_path, $files_in_db, $associated_filter)
        {
            if(!self::$upload_dir_path) {
                yield null;
            }

            // "stream_resolve_include_path" is like "file_exists" but should be quicker
            if( !stream_resolve_include_path($current_dir_path) ) {
                yield null;
            }

            foreach (scandir($current_dir_path) as $key => $file_name) {
                // Skip ".", "..", etc.
                if ($file_name == '.' || $file_name == '..' || $file_name == ".DS_Store" || $file_name == ".htaccess" || $file_name == "index.php") {
                    continue;
                }

                // Convert backslashes ("\") to forward slashes ("/")
                $full_path = wp_normalize_path($current_dir_path . "/" . $file_name);

                $isDir = is_dir($full_path);

                // It's probably faster to do it with one regex (below)
                // If it contains image size at the end (i.e. -100x100.jpg)
                // $is_thumb = preg_match('/[_-]\d+x\d+(?=\.[a-z]{3,4}$)/im', $file_name) == true;
                // $is_scaled = preg_match('/-scaled(?=\.[a-z]{3,4}$)/im', $file_name) == true;

                // If it contains image size at the end (i.e. -100x100.jpg) or ends with "-scaled" (also WP generated)
                $is_thumb_or_scaled = preg_match('/(-scaled|[_-]\d+x\d+)(?=\.[a-z]{3,4}$)/im', $file_name) == true;

                // Default file/folder skipping rules
                $is_ignored = $is_thumb_or_scaled;

                // Receive external rules for skipping files/folders
                $is_ignored_external = apply_filters('media_sync_filter_is_scan_object_ignored', $is_ignored, $full_path, $file_name);

                // Take custom rule for skipping files/folders from external hook/filter function
                if (is_bool($is_ignored_external)) {
                    $is_ignored = $is_ignored_external;
                }


                if ($is_ignored) {
                    continue;
                }


                $relative_path = self::media_sync_get_relative_path($full_path);
                $file_in_db = isset($files_in_db[$relative_path]) && !empty($files_in_db[$relative_path]) ?
                    $files_in_db[$relative_path] : false;
                $file_id = $file_in_db && !empty($file_in_db['id']) ? $file_in_db['id'] : false;
                $file_status = $file_in_db && !empty($file_in_db['status']) ? $file_in_db['status'] : false;

                if (!$isDir && $associated_filter && $associated_filter[0] == 'missing_from' && $associated_filter[1] == 'media_library' && $file_id !== false) {
                    continue;
                }


                // Ugly, but efficient
                $children = array();

                if ($isDir) {
                    $children = self::media_sync_get_list_of_files($full_path, $files_in_db, $associated_filter);

                    if (empty($children)) {
                        continue;
                    }
                }


                $file_uid = uniqid('', true);

                // Get current parents, to get for example: "/2012/03"
                $parents_path = str_replace(self::$upload_dir_path, '', $current_dir_path);

                // Trim first slash, to get for example: "2012/03"
                $parents_path = ltrim($parents_path, self::MEDIA_SYNC_DS);

                // Since this path is always using forward slashes, that's what we'll use here
                $parents = !empty($parents_path) ? explode(self::MEDIA_SYNC_DS, $parents_path) : array();

                // Replace forward slash with "_" and do other cleanup since this will be used as HTML attribute
                $parent_alias = !empty($parents_path) ? sanitize_title(str_replace(self::MEDIA_SYNC_DS, '_', $parents_path), $file_uid) : '';

                $alias = sanitize_title($file_name, $file_uid);

                $item = array(
                    'alias' => (!empty($parent_alias) ? $parent_alias . '_' : '') . $alias,
                    'display_name' => $file_name,
                    'is_dir' => !!$isDir,
                    'level' => count($parents) + 1,
                    'parent_alias' => $parent_alias,
                    'parents' => $parents,
                    'absolute_path' => self::media_sync_url_encode($full_path)
                );

                if ($isDir) {
                    $item['url'] = 'javascript:;';
                    $item['children'] = $children;
                    // TODO: Figure out how to count children when using generators (yield)
                    $item['count_children'] = null;
                } else {
                    // Encode just file name
                    $item['url'] = get_site_url() . self::media_sync_url_encode($relative_path);
                    $item['file_id'] = $file_id;
                    $item['file_status'] = $file_status;
                    $item['children'] = [];
                    $item['count_children'] = 0;
                }

                yield $item;
            }
        }

        /**
         * Convert special characters to safe characters but keeping forward slash.
         *
         * @param $url
         * @return string
         * @since 1.2.4
         */
        static private function media_sync_url_encode($url)
        {
            return str_replace('%2F', '/', rawurlencode($url));
        }


        /**
         * Get list of files that are already in database
         *
         * Caching does not seem to work, disabled for now
         *
         * @since 0.1.0
         * @return array
         */
        static private function media_sync_get_files_in_db()
        {
            $media_query = new WP_Query(array(
                'post_type' => 'attachment',
                'post_status' => array('inherit', 'trash'),
                'posts_per_page' => -1
            ));

            $files = array();
            foreach ($media_query->posts as $post) {

                // First try to find original image URL, to get proper URL without "-scaled" part for bigger images
                // https://make.wordpress.org/core/2019/10/09/introducing-handling-of-big-images-in-wordpress-5-3/
                $file_url = wp_get_original_image_url($post->ID);

                // If not image, get attachment URL
                if(!$file_url) {
                    $file_url = wp_get_attachment_url($post->ID);
                }

                // Should already have forward slashes since it's URL
                $relative_path = parse_url($file_url, PHP_URL_PATH);

                $files[$relative_path] = array(
                    'id' => $post->ID,
                    'name' => $post->post_title,
                    'status' => $post->post_status
                );
            }

            return $files;
        }


        /**
         * Show debugging stats.
         *
         * @since 1.2.0
         * @param string $event When are we showing these stats
         * @return void
         */
        static public function media_sync_render_debug_stats($event)
        {
            if(!$event || !self::media_sync_is_debug()) {
                return null;
            }

            $mem_usage = memory_get_usage();
            $mem_limit = self::media_sync_get_memory_limit();
            $limit_percentage = $mem_usage * 100 / $mem_limit;
            ?>
            <div class="media-sync-debugging-stats">
                <div class="media-sync-debugging-title">Debugging <strong><?= $event ?></strong>:</div>
                <div class="media-sync-debugging-stat-row">
                    Peak memory usage: <?= memory_get_peak_usage(true) / 1024 / 1024 ?> MB / <?= memory_get_peak_usage(true) / 1024 ?> KB
                </div>
                <div class="media-sync-debugging-stat-row">
                    Memory usage: <?= round($mem_usage / 1024 / 1024) ?> MB / <?= round($mem_usage / 1024) ?> KB
                    (<?= round($limit_percentage) ?>% of the available memory: <?= round($mem_limit / 1024 / 1024) ?> MB / <?= round($mem_limit / 1024) ?> KB)
                </div>
                <div class="media-sync-debugging-stat-row">
                    Time since start: <?= self::$start_time > 0 ? microtime(true) - self::$start_time : 0 ?> seconds
                </div>
            </div>
            <?php
        }


        /**
         * Parse the memory_limit variable from the php.ini file.
         *
         * @since 1.2.0
         * @return int
         */
        static private function media_sync_get_memory_limit()
        {
            $limit_string = ini_get('memory_limit');
            $unit = strtolower(mb_substr($limit_string, -1 ));
            $bytes = intval(mb_substr($limit_string, 0, -1), 10);

            switch ($unit)
            {
                case 'k':
                    $bytes *= 1024;
                    break 1;

                case 'm':
                    $bytes *= 1024 * 1024;
                    break 1;

                case 'g':
                    $bytes *= 1024 * 1024 * 1024;
                    break 1;

                default:
                    break 1;
            }

            return $bytes;
        }


        /**
         * Should debugging be used.
         *
         * @since 1.2.0
         * @return boolean
         */
        static public function media_sync_is_debug()
        {
            if(isset($_GET['debug'])) {
                return $_GET['debug'] !== "0";
            }

            if(!!get_option('ms_sg_use_debug', 1)) {
                return true;
            }

            // return defined('WP_DEBUG') && WP_DEBUG;

            return false;
        }

        
        /**
         * Check if logged in user has access
         *
         * @since 1.1.0
         * @return boolean
         */
        static public function media_sync_user_has_general_access() 
        {
            if ( !current_user_can( 'import' ) ) {
                return false;
            }

            return true;
        }
    }
endif; // End if class_exists check.
?>