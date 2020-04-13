import { registerBlockType } from '@wordpress/blocks';
import { createElement as el } from '@wordpress/element';
import edit from './edit.js'

registerBlockType( 'sc/recipe', {
	title: 'Recipe',
	icon: 'format-aside',
	category: 'common',
	attributes: {
		title: {
			source: 'html',
			selector: '.wp-block-sc-recipe__title',
			default: ''
		},
		blathering: {
			source: 'html',
			selector: '.wp-block-sc-recipe__blathering',
			default: ''
		},
		ingredients: {
			source: 'html',
			selector: '.wp-block-sc-recipe__ingredients',
			default: ''
		},
		instructions: {
			source: 'html',
			selector: '.wp-block-sc-recipe__instructions',
			default: ''
		}
	},
	edit,
	save: () => {
		return (
			el(
				'div',
				{
					className: 'sc-recipe-front'
				},
				'Hello from the front!'
			)
		)
	}
} )
