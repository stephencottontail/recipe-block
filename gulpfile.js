var gulp = require( 'gulp' ),
	postCSS = require( 'gulp-postcss' ),
	webpack = require( 'webpack' ),
	stream = require( 'webpack-stream' )

gulp.task( 'scripts', function() {
	return gulp.src( './src/block.js' )
		.pipe( stream( require( './webpack.config.js' ), webpack ) )
		.pipe( gulp.dest( './dist' ) )
} );

gulp.task( 'styles', function() {
	return gulp.src( './src/*.css' )
		.pipe( postCSS() )
		.pipe( gulp.dest( './dist' ) )
} );

gulp.task( 'watch', function() {
	gulp.watch( './src/*.css', gulp.series( 'styles' ) )
} );
