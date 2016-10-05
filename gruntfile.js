module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: { // Target options
                    style: 'compressed'
                },
                files: {
                    'dev/style.css': 'sass/style.scss',
                    'dev/inner-style.css': 'sass/inner-style.scss',
                    'dev/base.css': 'sass/baseboot.scss',
                    'dev/responsive.css': 'sass/responsive.scss'
                }
            }
        },
        concat_css: {
            options: {
                // Task-specific options go here. 
            },
            all: {
                src: ["dev/base.css", "dev/style.css" , "dev/responsive.css"],
                dest: "dev/bundles-styles.css"
            },
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
            },
        }


    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.registerTask('dev', ['watch']);
}