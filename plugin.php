<?php
	/**
	 * Plugin Name: Recipe Block
	 * Plugin Author: Stephen Dickinson <stephencottontail@me.com>
	 * Version: 1.0.0
	 */

	class SC_Recipe extends WP_Block_Type {
		public $name = 'sc/recipe';
		public $editor_script = 'sc-recipe-script';
		public $editor_style = 'sc-recipe-editor-style';
		public $style = 'sc-recipe-block-style';

		public function __construct() {
			parent::__construct( $this->name, array(
				'editor_script' => $this->editor_script,
				'editor_style'  => $this->editor_style,
				'style'         => $this->style
			) );
		}
	}
		
	add_action( 'init', function() {
		$recipe = new SC_Recipe();

		wp_register_style( 'sc-recipe-editor-style', plugins_url( 'dist/editor.css', __FILE__ ) );
		wp_register_style( 'sc-recipe-block-style', plugins_url( 'dist/block.css', __FILE__ ) );
		wp_register_script( 'sc-recipe-script', plugins_url( 'dist/block.js', __FILE__ ), array( 'wp-blocks', 'wp-element' ) );

		register_block_type( $recipe );
	} );
