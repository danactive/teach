/* global module */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		concat: {
			dev: {
				src: ["sample/js/*.js"],
				dest: 'dist/built.js',
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dev: {
				files: {
					'dist/built.min.js': ['dist/built.js']
				}
			}
		},
		watch: {
			dev: {
				files: '<%= concat.dev.src %>',
				tasks: ['concat', 'uglify']
			}
		}
	});

	// Load Grunt.js plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Task(s).
	grunt.registerTask('bundle', ['concat', 'uglify']);
};
