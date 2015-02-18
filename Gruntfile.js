/* global module */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		mochaTest: {
			dev: {
				src: ['sample/test/**/*.js']
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			dev: {
				files: ['<%= mochaTest.dev.src %>', 'sample/js/**/*.js'],
				tasks: ['mochaTest']
			}
		}
	});

	// Load Grunt.js plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-mocha-test');

	// Task(s).
	//grunt.registerTask('bundle', ['concat', 'uglify']);
};
