module.exports = function(grunt) {

   //Initializing the configuration object
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      // Task configuration
    less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling frontend.less into frontend.css
              "./public/assets/stylesheet/application.css":"./public/assets/stylesheet/application.less",
              "./public/assets/stylesheet/frontend.css":"./public/assets/stylesheet/frontend.less",
              //compiling backend.less into backend.css
              //"./public/assets/stylesheets/backend.css":"./app/assets/stylesheets/backend.less"
            }
        },
        website: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              "./public/website_assets/stylesheet/main.css":"./public/website_assets/stylesheet/main.less",
            }
        }
    },
    concat: {
      options: {
        separator: ';',
        stripBanners: true,
        
      },
      js_frontend: {
        src: [
          './public/vendor/jquery/jquery.js',
          './public/vendor/bootstrap/dist/js/bootstrap.js',
          './public/vendor/jquery-form/jquery.form.js',
          './public/vendor/RRSSB/js/rrssb.js',
          './public/vendor/humane-js/humane.js',
          './public/vendor/jquery-backstretch/jquery.backstretch.js',
          './public/assets/javascript/app-public.js'
        ],
        dest: './public/assets/javascript/frontend.js',
      },
      js_backend: {
        src: [
          './public/vendor/modernizr/modernizr.js',
          './public/vendor/bootstrap/dist/js/bootstrap.js',
          './public/vendor/jquery-form/jquery.form.js',
          './public/vendor/humane-js/humane.js',
          './public/vendor/RRSSB/js/rrssb.js',
            './public/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js',
            './public/vendor/curioussolutions-datetimepicker/dist/DateTimePicker.js',
            './public/vendor/jquery-minicolors/jquery.minicolors.min.js',
          './public/assets/javascript/app.js'
        ],
        dest: './public/assets/javascript/backend.js',
      },
    },
    uglify: {
      options: {
        mangle: true,  // Use if you want the names of your functions and variables unchanged
        preserveComments: false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
        
      },
      frontend: {
        files: {
          './public/assets/javascript/frontend.js': './public/assets/javascript/frontend.js',
        }
      },
      backend: {
        files: {
          './public/assets/javascript/backend.js': './public/assets/javascript/backend.js',
        }
      },
    },
    phpunit: {
        classes: {
        },
        options: {
        }
    },
//    watch: {
//        js_frontend: {
//          files: [
//            //watched files
//            './bower_components/jquery/jquery.js',
//            './bower_components/bootstrap/dist/js/bootstrap.js',
//            './app/assets/javascript/frontend.js'
//            ],   
//          tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
//          options: {
//            livereload: true                        //reloads the browser
//          }
//        },
//        js_backend: {
//          files: [
//            //watched files
//            './bower_components/jquery/jquery.js',
//            './bower_components/bootstrap/dist/js/bootstrap.js',
//            './app/assets/javascript/backend.js'
//          ],   
//          tasks: ['concat:js_backend','uglify:backend'],     //tasks to run
//          options: {
//            livereload: true                        //reloads the browser
//          }
//        },
//        less: {
//          files: ['./app/assets/stylesheets/*.less'],  //watched files
//          tasks: ['less'],                          //tasks to run
//          options: {
//            livereload: true                        //reloads the browser
//          }
//        },
//        tests: {
//          files: ['app/controllers/*.php','app/models/*.php'],  //the task will run only when you save files in this location
//          tasks: ['phpunit']
//        }
//      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-phpunit');

  // Task definition
  //grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['less', 'concat']);
  grunt.registerTask('deploy', ['less', 'concat', 'uglify']);
  grunt.registerTask('js', ['concat']);
  grunt.registerTask('styles', ['concat']);
  grunt.registerTask('minify', ['uglify']);

};