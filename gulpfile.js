var gulp = require( 'gulp' ),
	babel = require( 'gulp-babel' );

gulp.task( 'scripts', function() {
	return gulp.src( './src/*.js' )
		.pipe( babel( {
			presets: [ '@wordpress/default' ]
		} ) )
		.pipe( gulp.dest( './dist' ) )
} );
