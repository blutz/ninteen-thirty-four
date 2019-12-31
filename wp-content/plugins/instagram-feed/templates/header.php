<?php
/**
 * Custom Feeds for Instagram Header Template
 * Adds account information and an avatar to the top of the feed
 *
 * @version 2.1 Instagram Feed by Smash Balloon
 *
 */

// Don't load directly
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}
$header_padding = (int)$settings['imagepadding'] > 0 ? 'padding: '.(int)$settings['imagepadding'] . $settings['imagepaddingunit'] . ';' : '';
$header_margin           = (int) $settings['imagepadding'] < 10 ? ' margin-bottom: 10px;' : '';

$username = SB_Instagram_Parse::get_username( $header_data );
$avatar = SB_Instagram_Parse::get_avatar( $header_data, $settings );
$name = SB_Instagram_Parse::get_name( $header_data );
$header_text_color_style = SB_Instagram_Display_Elements::get_header_text_color_styles( $settings ); // style="color: #517fa4;" already escaped
$size_class        = SB_Instagram_Display_Elements::get_header_size_class( $settings );

$bio               = SB_Instagram_Parse::get_bio( $header_data );
$should_show_bio = $settings['showbio'] && $bio !== '';
$bio_class       = ! $should_show_bio ? ' sbi_no_bio' : '';
?>
<div class="sb_instagram_header <?php echo esc_attr( $size_class ); ?>" style="<?php echo $header_padding . $header_margin; ?>padding-bottom: 0;">
    <a href="https://www.instagram.com/<?php echo urlencode( $username ); ?>" target="_blank" rel="noopener" title="@<?php echo esc_attr( $username ); ?>" class="sbi_header_link">
        <div class="sbi_header_text<?php echo esc_attr( $bio_class ); ?>">
            <h3 <?php echo $header_text_color_style; ?>><?php echo esc_html( $username ); ?></h3>
	        <?php if ( $should_show_bio ) : ?>
                <p class="sbi_bio" <?php echo $header_text_color_style; ?>><?php echo str_replace( '&lt;br /&gt;', '<br>', esc_html( nl2br( $bio ) ) ); ?></p>
	        <?php endif; ?>
        </div>
        <div class="sbi_header_img" data-avatar-url="<?php echo esc_attr( SB_Instagram_Parse::get_avatar( $header_data ) ); ?>">
            <div class="sbi_header_img_hover"><?php echo SB_Instagram_Display_Elements::get_icon( 'newlogo', $icon_type ); ?></div>
            <img src="<?php echo esc_url( $avatar ); ?>" alt="<?php echo esc_attr( $name ); ?>" width="50" height="50">
        </div>
    </a>
</div>