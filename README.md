# Minify
## Setup
* Install [grunt.js](http://gruntjs.com/getting-started)

## Terms
* **concatenate** is to join many files into one
* **minify** is to transform variables to their shortest form (i.e. functionName to a). Whitespace including comments are removed. As a result your JavaScript code is obfuscated.
* **CLI** command line interface (i.e. Windows command prompt or Mac shell or Git terminal)

## CLI Commands
* `grunt watch` Watch JavaScript files
* `grunt bundle` Bundle JavaScript files
 
## Examples
* [jQuery dev](http://code.jquery.com/jquery-1.11.2.js)
* [jQuery min](http://code.jquery.com/jquery-1.11.2.min.js)
 
## Static asset pipeline
* Concatenation: join many files into one
	* Reason: Lower HTTP requests. HTTP handshake is slow and consumes mobile battery and costly data
* Minification: Remove whitespace (spaces, tabs, line breaks) and comments
	* Reason: Decrease filesize. Eliminate human readability bloat.
* Obfuscation: Replace long variable names with 1 or 2 character variable names.
	* Reason: Decrease filesize. Eliminate human readability bloat.
* Compress: Configure your web server to apply gzip compression.
	* Reason: Decrease filesize which relies on the browser to unzip.

Todo
* Concat: CSS, JS
* Minify: HTML, CSS, JS
* Obfuscate: JS
