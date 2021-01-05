<?php

namespace unapersona;

class Blocks{

	private $slug;
	private $folder;

	public function __construct($slug) {

		$this->slug = $slug;
		$this->folder = pathinfo( dirname( __DIR__ ), PATHINFO_BASENAME );
		add_action('plugins_loaded', array($this, 'load_plugin_textdomain'));
		add_action('enqueue_block_assets', array($this, 'enqueue_block_assets'));
		add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));

	}

	function enqueue_block_assets(){
		wp_enqueue_style(
			$this->slug.'-style',
			plugins_url( 'dist/blocks.style.build.css', __DIR__ ),
			array( 'wp-editor' )
		);
	}

	function enqueue_block_editor_assets(){

		wp_enqueue_script(
			$this->slug,
			plugins_url( 'dist/blocks.build.js', __DIR__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
		);

		wp_enqueue_style(
			$this->slug.'-editor',
			plugins_url( 'dist/blocks.editor.build.css', __DIR__ ),
			array( 'wp-edit-blocks' )
		);

		wp_set_script_translations(
			$this->slug,
			$this->slug,
			plugin_dir_path( __DIR__ ) . 'languages'
		);

	}

	function load_plugin_textdomain(){
		load_plugin_textdomain(
			$this->slug,
			false,
			$this->folder . '/languages'
		);
	}

}