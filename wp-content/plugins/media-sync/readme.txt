=== Media Sync ===
Contributors: erolsk8, simonkane
Donate link: https://www.paypal.me/erolsk8
Tags: media, uploads, import, ftp, server
Requires at least: 3.0.1
Tested up to: 5.5.1
Requires PHP: 5.5
Stable tag: trunk
License: GPLv2+
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Simple plugin to scan "uploads" directory and bring those files into Media Library.

== Description ==

You can scan all files that are in `uploads` directory and see which ones are actually in Media Library and which ones are just sitting there. Then you can select files you want to import to the database and therefore make them available in Media Library.

You can also use FTP to upload your files to `uploads` directory and bring those files into Media Library. 


= Disclaimers =

Please read before adding a support topic. Reviews are not intended for support or suggestions.

1.  "For developers"
    This plugin makes database changes (`wp_posts` and `wp_postmeta` tables), and it was primarily developed to help other developers that are aware of the consequences.

2.  "1 file first"
    Please be careful and try to import only one file first, to see if it works.

3.  "All at once"
    This plugin is focused on scanning, selecting, and importing all files at once. So it might not be great for huge amounts of files, since it can use up a lot of memory. Future versions will hopefully solve that problem. For now, you can try to go to Settings -> Media Sync and set it to scan only a specific directory.

4.  "Your setup is unique"
    Please keep in mind that each WordPress installation is unique, so it's quite possible this plugin will not work in your case. If that happens, please turn on debugging in settings of this plugin, try to figure out why you have that problem, and then describe what you found in the Support section. The more details we have - it's more likely the problem will be solved.


= Ignored files =
- index.php,
- various hidden files (.DS_Store, .htaccess),
- WP generated thumbnails (files ending with for example -100x100.jpg),
- WP generated scaled images (files ending with -scaled).

This is now configurable with a custom hook function and it can totally overwrite these rules or add additional ones.


== Installation ==

1. Upload `media-sync` directory to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Screenshots ==

1. Initial Page
2. Example of selecting files for import
3. Import to Media Library in progress
4. Import completed

== Frequently Asked Questions ==

= Stuck at importing / spins endlessly =

Please try to increase `max_execution_time` (and/or `memory_limit`) in `php.ini` on server (as described [here](https://thimpress.com/knowledge-base/how-to-increase-maximum-execution-time-for-wordpress-site/)). Or if you have too many files, try going to Settings -> Media Sync and change "Scan directory" to some inner folder.

= Files not showing up in Media Library =

Please make sure "Dry Run" option is NOT checked. This is a safety mechanism to make sure you know what you're doing, so be careful, try it first with just one file.

= Doesn't work =

Please first try to turn on debugging by adding this: `define('WP_DEBUG', true);` to your `wp-config.php` and check [Network tab in Chrome DevTools](https://www.section.io/blog/chrome-developer-tools-tutorial-network/) to see what is going on in the background. Then report actual errors since it's hard to help without knowing the error which is causing the problem.


== Changelog ==

= 1.2.5 =
* New filter hook (`media_sync_filter_before_update_metadata`) which can be used to customize how metadata is updated or to run additional actions after file import.

= 1.2.4 =
* Handle files with quotes (apostrophes) or other special characters in the file name.
* Continue importing other selected files if there was an error with some of the files.
* Show errors in UI instead of alert.

= 1.2.3 =
* Better error handling and fallback when finding mime type

= 1.2.2 =
* Fix meta data errors caused by invalid mime types

= 1.2.1 =
* Much better error handling while importing

= 1.2.0 =
* Optimized directory scanning to use less memory
* New option to turn on debugging for this plugin
* Changed parameters passed to `media_sync_filter_is_scan_object_ignored` hook function
* Now requires PHP 5.5

= 1.1.8 =
* Fix handling big ("-scaled.jpg") images [introduced in WordPress 5.3](https://make.wordpress.org/core/2019/10/09/introducing-handling-of-big-images-in-wordpress-5-3/). These files will now be skipped and won't be imported multiple times.
* Add handy "Re-scan" button.

= 1.1.7 =
* Fix issues when importing files containing special characters

= 1.1.6 =
* Slight improvements with error handling in JavaScript

= 1.1.5 =
* Always convert backslashes ("\") to forward slashes ("/") to fix various issues when using Windows Server.

= 1.1.4 =
* Important backslash ("\") vs forward slash ("/") fix for use on Windows Server.

= 1.1.3 =
* New option to set "Scan directory" in settings which will allow checking only certain sub directory.
* New hook function `media_sync_filter_is_scan_object_ignored` which can be used to overwrite which files are ignored by default or to just skip additional files.

= 1.1.2 =
* Fix Smart File Time on Windows server

= 1.1.1 =
* Reduce the maximum number of items to import per batch from 20 to 10.
So batch sizes are now: 1 (importing 1 to 10 items); 5 (importing 11 to 100 items) or 10 (importing more than 100 items)

= 1.1.0 =
* [IMPORTANT] Date of imported Media Library items now defaults to the current date.
But there are options to choose before importing and also a possibility to overwrite that using the custom hook.
* New options page with the option to disable and hide "Dry Run".
* Fix Media Library filter that was showing all items when the filter didn't find any result.

= 1.0.4 =
* Reduce the number of items to import per batch

= 1.0.3 =
* Support multisite network by changing required access [capability](https://wordpress.org/support/article/roles-and-capabilities/#capability-vs-role-table) from `update_plugins` to `import`

= 1.0.2 =
* Another fix for get_current_screen error

= 1.0.1 =
* Fix get_current_screen error

= 1.0.0 =
* New option to clean up Media Library from items that are missing actual files (using custom Media Library filter)
* New filter when scanning uploads directory which can help to show only files missing from Media Library

= 0.1.6 =
* Fix PHP short array syntax
* Update required PHP version to 5.4

= 0.1.5 =
* Date of imported Media Library item is now set based on file modification timestamp

= 0.1.4 =
* Add plugin localization
* Add Serbian translation

= 0.1.3 =
* Various improvements and fixes

= 0.1.2 =
* Fix sorting of directories and files
* Minor wording changes and code cleanup

= 0.1.1 =
* Fix error on activation

= 0.1.0 =
* Initial plugin features

== Upgrade Notice ==

= 0.1.0 =
Initial plugin features