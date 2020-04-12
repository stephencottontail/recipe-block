import { RichText } from '@wordpress/blockEditor'
import { Component, createElement as el } from '@wordpress/element'

class Edit extends Component {
	constructor( props ) {
		super( props )
	}

	render() {
		const { attributes, setAttributes, className } = this.props

		console.log( attributes )
		return (
			el(
				'div',
				{
					className: className
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
				)
			)
		)
	}
}

export default Edit
