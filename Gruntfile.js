module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			dev: {
				options: {
					"tag-pair": true,
					"tagname-lowercase": true,
					"attr-lowercase": true,
					"attr-value-double-quotes": true,
					"doctype-first": true,
					"spec-char-escape": true,
					"id-unique": true,
					"head-script-disabled": true,
					"style-disabled": true
				},
				src: ['html/**/*.html']
			}
		},
		htmlmin: {                                     // Task
			dev: {                                      // Target
				options: {                                 // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				src: "<%=htmlhint.dev.src%>",
				dest: "minified",
				expand: true,
				nonull: true,
				flatten: true
			}
		},
		replace: {
			dist: {
				options: {
					patterns: [
						{
							match: /{{JQUERY_VERSION}}/g,
							replacement: '1.11.1'
						}
					]
				},
				src: "<%=htmlmin.dev.dest%>/**/*.html",
				dest: "public",
				expand: true,
				nonull: true,
				flatten: true
			}
		},
		watch: { // Task
			dev: { // Target
				files: "<%=htmlhint.dev.src%>",
				tasks: ['build'],
				options: {
					spawn: false
				}
			}
		}
	});

	// Load Grunt.js plugins
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-replace');

	// Default task(s).
	grunt.registerTask('validate', ['htmlhint']);

	grunt.registerTask('minify', ['htmlmin','replace']);
	
	grunt.registerTask('build', ['validate', 'minify']);
};