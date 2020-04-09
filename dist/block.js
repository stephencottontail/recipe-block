wp.blocks.registerBlockType( 'sc/recipe', {
	title: 'Recipe',
	category: 'common',
	icon: 'edit',
	edit: function() {
		return wp.element.createElement( 'div', { className: 'sc-recipe-editor' }, 'Hello from the editor!' );
	},
	save: function() {
		return wp.element.createElement( 'div', { className: 'sc-recipe-front' }, 'Hello from the front-end!' );
	}
} );
