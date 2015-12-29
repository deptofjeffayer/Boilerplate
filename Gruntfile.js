module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['css']
			}
		},
	    sass: {
	        options: {
	            sourceMap: false,
	            outputStyle: 'expanded'
	        },
	        dist: {
	            files: {
	                'prod/library/css/main.css': 'src/sass/main.scss'
	            }
	        }
	    },
    	autoprefixer: {
    		options: {
    			browsers: ['last 2 versions', 'ie 8', 'ie 9'],
        		map: true
    		},
    		prod: {
    			src: 'prod/library/css/main.css',
    			dest: 'prod/library/css/main.css'
    		}
    	},
    	express: {
    		dev: {
	    		options: {
	    			port: 1337,
	    			script: 'index.js'
	    		}
	    	}
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('css', ['sass']);
	grunt.registerTask('default', ['express:dev', 'watch']);
}