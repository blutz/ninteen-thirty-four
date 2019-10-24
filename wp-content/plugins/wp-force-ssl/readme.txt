=== WP Force SSL ===
Contributors: WebFactory, UnderConstructionPage, googlemapswidget, wpreset
Tags: ssl, force ssl, add ssl, enable ssl, https, ssl certificate, ssl redirect, redirect, mixed content, hsts
Requires at least: 4.6
Tested up to: 5.2
Requires PHP: 5.2
Stable Tag: 1.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Enable SSL with 1 click! Add an SSL certificate & WP Force SSL to redirect site from HTTP to HTTPS.

== Description ==

WP Force SSL helps you redirect unsecure HTTP traffic to secure HTTPS one **without the need to touch any code**. Just activate Force SSL and everything will be configured for you. The entire site will move to HTTPS using your SSL certificate.

To keep things fast & simple WP Force SSL is very lightweight - there are only two settings.
Access options via main Settings menu - Force SSL.

= Three fast steps to get you started: =
* Get an SSL certificate (yea, you need one, sorry).
* Activate WP Force SSL.
* Test certificate & you're done!

= SSL certificate testing tool =
WP Force SSL comes with an SSL certificate testing tool. Simply click "Test SSL certificate" and it'll test if the certificate is valid, properly installed, up-to date, and generally in good shape to be used on your site.

= Settings =
* Force SSL - automatically redirect all traffic from HTTP to HTTPS
* Enable HTTP Strict Transport Security (HSTS) - HSTS is a web security policy mechanism that helps to protect your site against protocol downgrade attacks and cookie hijacking. It allows web servers to declare that web browsers should interact with it using only HTTPS connections. It adds additional security to your site.

= Need support? =
We're here for you! Things get frustrating when they don't work so make sure you <a href="https://wordpress.org/support/plugin/wp-force-ssl/">open a support topic</a> in the official Force SSL forum. We answer all questions within a few hours!

= Wanna say "thank you"? =
WP Force SSL is 100% free so the best way to say "thank you" is to <a href="https://wordpress.org/support/plugin/wp-force-ssl/reviews/#new-post">leave a review</a>. Reviews are what keeps the plugin going. Thank you!


== Frequently Asked Questions ==

= Who is this plugin for? =
For anyone who has an SSL certificate installed on their site and wants to be sure all content is accessed (and redirected if needed) via a secure connection.

= Do I need an SSL certificate for this to work? =
Yes, you do need an SSL certificate regardless of the plugin you're using. If you don't have one try switching to a <a href="https://wordpress.org/hosting/">quality hosting provider</a> that provides and installs free certificates.

= Where and how can I get an SSL certificate? =
You can buy an SSL certificate but we recommend getting one for free from Let's Encrypt. The easiest way to get a free SSL certificate is to use a <a href="https://wordpress.org/hosting/">good hosting provider</a> that will automatically get an SSL certificate for you and install it. There's nothing to configure, it's just one click - they do everything for you.

= After activating WP Force SSL plugin, do I need to do anything else? =
No, nothing. After activating WP Force SSL, the main option "redirect SSL" will already be active. What you can do is use our tool to test your SSL certificate, to make sure it works properly.

== Screenshots ==

1. After activation, all traffic is redirected from HTTP to HTTPS.
2. Test your SSL certificate with our built-in tool.

== Installation ==

1. Open Plugins - Add New in WP admin and search for "WP Force SSL"
2. Install and activate the plugin
3. Plugin settings will open automatically (you can also access them via Settings - Force SSL)
4. Test you SSL certificate using our tool
5. Make sure WP Address and Site Address in Settings - General have an "https" prefix


== Changelog ==
= v1.5 =
- 2019/09/23
- complete rewrite of entire WP Force SSL plugin
- added support for HSTS
- 288,290 downloads; 80,000 installations

= v1.4 =
- Changed function naming to avoid conflicts reported by users.

= v1.3 =
- Dropping support for PHP 5.3: Only 15.9% of the people that use WordPress use PHP 5.3, it reached end of life and you should ask your host to upgrade.

= v1.2.1 =
- Fixed an issue where some users were getting a error message for no valid header when activating the plugin.

= v1.2 =
- Dropping support for PHP 5.2: Only 5.7% of the people that use WordPress use PHP 5.2, it's old, buggy, and insecure.

= v0.1 =
- 2015/01/15
- initial release
