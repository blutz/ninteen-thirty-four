<?php
/**
 * Templates
 *
 * @package ghostkit
 */

/**
 * GhostKit_Templates
 */
class GhostKit_Templates {
    /**
     * GhostKit_Templates constructor.
     */
    public function __construct() {
        // Register custom post type.
        add_action( 'init', array( $this, 'add_custom_post_type' ) );
    }

    /**
     * Register custom post type.
     */
    public function add_custom_post_type() {
        register_post_type(
            'ghostkit_template',
            array(
                'labels'              => array(
                    'name'                => _x( 'Templates', 'Post Type General Name', 'ghostkit' ),
                    'singular_name'       => _x( 'Template', 'Post Type Singular Name', 'ghostkit' ),
                    'menu_name'           => __( 'Templates', 'ghostkit' ),
                    'parent_item_colon'   => __( 'Parent Template', 'ghostkit' ),
                    'all_items'           => __( 'Templates', 'ghostkit' ),
                    'view_item'           => __( 'View Template', 'ghostkit' ),
                    'add_new_item'        => __( 'Add New Template', 'ghostkit' ),
                    'add_new'             => __( 'Add New', 'ghostkit' ),
                    'edit_item'           => __( 'Edit Template', 'ghostkit' ),
                    'update_item'         => __( 'Update Template', 'ghostkit' ),
                    'search_items'        => __( 'Search Template', 'ghostkit' ),
                    'not_found'           => __( 'Not Found', 'ghostkit' ),
                    'not_found_in_trash'  => __( 'Not found in Trash', 'ghostkit' ),
                ),
                'public'              => false, // true?
                'publicly_queryable'  => false, // true?
                'has_archive'         => false,
                'show_ui'             => true,
                'exclude_from_search' => true,
                'show_in_nav_menus'   => false,
                'rewrite'             => false,
                // phpcs:ignore
                'menu_icon'           => 'data:image/svg+xml;base64,' . base64_encode( file_get_contents( ghostkit()->plugin_path . 'assets/images/admin-icon-templates.svg' ) ),
                'menu_position'       => 57,
                'hierarchical'        => false,
                'show_in_menu'        => true,
                'show_in_admin_bar'   => true,
                'show_in_rest'        => true,
                'taxonomies'          => array(
                    'ghostkit_template_category',
                ),
                'capability_type'     => 'post',
                'supports'            => array(
                    'title',
                    'editor',
                    'thumbnail',
                ),
            )
        );

        register_taxonomy(
            'ghostkit_template_category',
            'ghostkit_template',
            array(
                'label'              => esc_html__( 'Categories', 'ghostkit' ),
                'labels'             => array(
                    'menu_name' => esc_html__( 'Categories', 'ghostkit' ),
                ),
                'rewrite'            => false,
                'hierarchical'       => false,
                'publicly_queryable' => false,
                'show_in_nav_menus'  => false,
                'show_in_rest'       => true,
                'show_admin_column'  => true,
            )
        );
    }
}

new GhostKit_Templates();
