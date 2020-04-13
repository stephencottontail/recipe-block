import { RichText } from '@wordpress/blockEditor'
import { Component, createElement as el } from '@wordpress/element'

class Edit extends Component {
	constructor( props ) {
		super( props )
	}

	render() {
		const { attributes, setAttributes, className } = this.props

		return (
			el(
				'div',
				{
					className: className
				},
				el(
					RichText,
					{
						tagName: 'h2',
						className: `${className}__title`,
						value: attributes.title,
						placeholder: 'Make sure to use a minimum of 4 adjectives when naming your recipe...',
						keepPlaceholderOnFocus: true,
						onChange: ( content ) => {
							setAttributes( { title: content } )
						}
					}
				),
				el(
					'div',
					{
						className: `${className}__content`,
					},
					el(
						RichText,
						{
							className: `${className}__blathering`,
							value: attributes.blathering,
							placeholder: 'Write your pretentious irrelevant blathering about this recipe...',
							keepPlaceholderOnFocus: true,
							multiline: true,
							onChange: ( content ) => {
								setAttributes( { blathering: content } )
							}
						}
					),
					el(
						RichText,
						{
							tagName: 'ul',
							className: `${className}__ingredients`,
							value: attributes.ingredients,
							placeholder: 'Ingredients...',
							keepPlaceholderOnFocus: true,
							multiline: 'li',
							onChange: ( content ) => {
								setAttributes( { ingredients: content } )
							}
						}
					),
					el(
						RichText,
						{
							tagName: 'ol',
							multiline: 'li',
							className: `${className}__instructions`,
							value: attributes.instructions,
							placeholder: 'Instructions...',
							keepPlaceholderOnFocus: true,
							onChange: ( content ) => {
								setAttributes( { instructions: content } )
							}
						}
					)
				)
			)
		)
	}
}

export default Edit
