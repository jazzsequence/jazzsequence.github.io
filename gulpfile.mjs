import gulp from 'gulp';
import { deleteAsync } from 'del';
import * as sassCompiler from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( sassCompiler );

gulp.task( 'styles', () => {
	return gulp.src( 'src/assets/sass/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( gulp.dest( './src/assets/' ) );
} );

gulp.task( 'clean', () => {
	return deleteAsync('src/assets/style.css');
} );

gulp.task( 'build', gulp.series( [ 'clean', 'styles' ] ) );

gulp.task( 'watch', () => {
	gulp.watch( 'src/assets/sass/**/*.scss', ( done ) => {
		gulp.series( [ 'clean', 'styles' ] )( done );
	} );
} );
