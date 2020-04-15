import { registerBlockType } from '@wordpress/blocks';
import edit from './edit.js'

registerBlockType( 'sc/recipe', {
	title: 'Recipe',
	icon: 'format-aside',
	category: 'common',
	edit,
	save: () => {
		return null
	}
} )
