var autoprefixer = require( 'autoprefixer' ),
	atImport = require( 'postcss-import' ),
	customProps = require( 'postcss-custom-properties' );

module.exports = {
	plugins: [
		atImport,
		customProps( {
			preserve: false
		} ),
		autoprefixer
	]
}
