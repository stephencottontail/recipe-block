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
		public $render_callback = 'sc_recipe_front_end_render';
		public $attributes = array(
			'title' => array(
				'type' => 'string'
			),
			'blathering' => array(
				'type' => 'string'
			),
			'ingredients' => array(
				'type' => 'string'
			),
			'instructions' => array(
				'type' => 'string'
			)
		);

		public function __construct() {
			parent::__construct( $this->name, array(
				'editor_script' => $this->editor_script,
				'editor_style'  => $this->editor_style,
				'style'         => $this->style
			) );
		}

		public function set_props( $args ) {
			parent::set_props( array( 'render_callback' => $this->render_callback ) );
		}
	}

	add_action( 'init', function() {
		wp_register_style( 'sc-recipe-editor-style', plugins_url( 'dist/editor.css', __FILE__ ) );
		wp_register_style( 'sc-recipe-block-style', plugins_url( 'dist/block.css', __FILE__ ) );
		wp_register_script( 'sc-recipe-script', plugins_url( 'dist/block.js', __FILE__ ), array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-block-editor' ) );

		$recipe = new SC_Recipe();
		register_block_type( $recipe );

		wp_enqueue_style( 'sc-recipe-google-fonts', '//fonts.googleapis.com/css?family=Poiret+One|Lora:400,400i,700,700i' );
	} );

	function sc_recipe_front_end_render( $attributes ) {
		$title = $attributes['title'];
		$blathering = wp_kses( $attributes['blathering'], array( 'p' => array() ) );
		$ingredients = wp_kses( $attributes['ingredients'], array( 'li' => array() ) );
		$instructions = wp_kses( $attributes['instructions'], array( 'li' => array() ) );

		if ( ! $title && ! $blathering && ! $ingredients && ! $instructions ) {
			return;
		}
		
		$output = sprintf( '<div class="wp-block-sc-recipe"><h2 class="wp-block-sc-recipe__title">%s</h2><div class="wp-block-sc-recipe__content">', esc_attr( $title ) );

		if ( $blathering ) {
			$output .= sprintf( '<div class="wp-block-sc-recipe__blathering-wrapper"><div class="overlay"><svg viewBox="0 0 100 100"><polygon points="0 0, 100 0, 50 75" /></svg></div><div class="wp-block-sc-recipe__blathering">%s</div></div><!-- .wp-block-sc-recipe__blathering-wrapper -->', $blathering );
			$output .= sprintf( '<script type="text/javascript" src="%s"></script>', plugins_url( 'dist/toggle.js', __FILE__ ) );
		}

		if ( $ingredients ) {
			$output .= sprintf( '<div class="wp-block-sc-recipe__ingredients-wrapper"><h3 class="wp-block-sc-recipe__section-title">%s</h3><ul class="wp-block-sc-recipe__ingredients">%s</ul></div><!-- .wp-block-sc-recipe__ingredients-wrapper -->', 'Ingredients', $ingredients );
		}

		if ( $instructions ) {
			$output .= sprintf( '<div class="wp-block-sc-recipe__instructions-wrapper"><h3 class="wp-block-sc-recipe__section-title">%s</h3><ol class="wp-block-sc-recipe__instructions">%s</ol></div><!-- .wp-block-sc-recipe__instructions-wrapper -->', 'Instructions', $instructions );
		}

		$output .= '</div><!-- .wp-block-sc-recipe__content --></div><!-- .wp-block-sc-recipe -->';

		return $output;
	}
