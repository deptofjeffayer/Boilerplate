module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['css']
			},
			js: {
				files: 'src/js/**/*.js',
				tasks: ['js']
			}
		},
	    sass: {
	        options: {
	            sourceMap: false,
	            outputStyle: 'expanded'
	        },
	        dist: {
	            files: {
	                'views/library/css/main.css': 'src/sass/main.scss'
	            }
	        }
	    },
    	autoprefixer: {
    		options: {
    			browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        		map: true
    		},
    		prod: {
    			src: 'views/library/css/main.css',
    			dest: 'views/library/css/main.css'
    		}
    	},
    	jshint: {
			all: ['src/js/**/*.js']
		},
		concat: {
			output: {
				src: ['src/js/**/*.js'],
				dest: 'views/library/js/main.js' 
			}
		},
    	express: {
    		dev: {
	    		options: {
	    			port: 1337,
	    			script: 'index.js'
	    		}
	    	}
    	},

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('js', ['jshint', 'concat']);
	grunt.registerTask('default', ['express:dev', 'watch']);
}