/* global module */

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		htmlhint: { // Task
			dev: { // Target
				options: { // Target options
					"tag-pair": true,
					"tagname-lowercase": true,
					"attr-lowercase": true,
					"attr-value-double-quotes": true,
					"doctype-first": true,
					"spec-char-escape": true,
					"id-unique": true,
					"head-script-disabled": true
				},
				src: [
					'**/*.html',
					'!node_modules/**/*.html'
				]
			}
		},
		jshint: {
			dev: {
				src: [
					'Gruntfile.js',
					'**/*.js',
					'!node_modules/**/*.js',
					'!dist/**/*.js'
				],
				nonull: true
			},
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				loopfunc: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true
			}
		},
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			htmlhint: {
				files: '<%= htmlhint.dev.src %>',
				tasks: ['htmlhint']
			},
			jshint: {
				files: ['<%= jshint.dev.src %>'],
				tasks: ['jshint'],
				options: {
					reload: true
				}
			}
		}
	});

	// Load Grunt.js plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-htmlhint');

	// Task(s).
	grunt.registerTask('lint', ['htmlhint', 'jshint']);
	grunt.registerTask('hint', ['lint']);
};
