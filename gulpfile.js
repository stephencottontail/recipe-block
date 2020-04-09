var gulp = require( 'gulp' ),
	babel = require( 'gulp-babel' ),
	postCSS = require( 'gulp-postcss' );

gulp.task( 'scripts', function() {
	return gulp.src( './src/*.js' )
		.pipe( babel( {
			presets: [ '@wordpress/default' ]
		} ) )
		.pipe( gulp.dest( './dist' ) )
} );

gulp.task( 'styles', function() {
	return gulp.src( './src/*.css' )
		.pipe( postCSS() )
		.pipe( gulp.dest( './dist' ) )
} );
