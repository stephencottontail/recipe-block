const { registerBlockType } = window.wp.blocks
const { createElement: el } = window.wp.element

registerBlockType( 'sc/recipe', {
	title: 'Recipe',
	icon: 'format-aside',
	category: 'common',
	edit: () => {
		return el( 'div', {
			className: 'sc-recipe-editor'
		}, 'Hello from the editor!' )
	},
	save: () => {
		return el( 'div', {
			className: 'sc-recipe-front'
		}, 'Hello from the front!' )
	}
} )
