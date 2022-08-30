const gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' )( require( 'sass' ) ),
	del = require( 'del' );

gulp.task( 'styles', () => {
	return gulp.src( 'src/assets/sass/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( './src/assets/' ) );
} );

gulp.task( 'clean', () => {
	return del( [
		'src/assets/style.css',
	] );
} );

gulp.task( 'build', gulp.series( [ 'clean', 'styles' ] ) );

gulp.task( 'watch', () => {
	gulp.watch( 'src/assets/sass/**/*.scss', ( done ) => {
		gulp.series( [ 'clean', 'styles' ] )( done );
	} );
} );
