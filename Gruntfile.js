/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({        
        pkg: grunt.file.readJSON('package.json'),
            // SASS for compile scss into css
            sass: {
                dist: {
                    options:{
                        sourcemap: 'auto',
                        style: 'compact',
                        update: true
                    },
                    files: [{
                        expand: true,
                        cwd:  'src',
                        src:  ['**/*.scss'],
                        dest: 'dist',
                        ext:  '.css'
                    }]                            

                }
            },
            watch: {
                css: {
                    files: '**/*.scss',
                    tasks: ['sass']
                }
            },            
            cssmin: {                
                options:{
                    sourcemap: true,
                    shorthandCompacting: true,
                    keepSpecialComments: 0,    
                    removeDuplicates: false,   
                    restructure: true,        
                    mergeAdjacent: true,
                    mergeMediaQueries: true
                },
                target: {
                    files: [{
                         expand: true,
                         cwd: 'dist',
                         src: ['**/*.css'],
                         dest: 'dist',
                         ext: '.min.css'
                    }]
                }
            },
            uglify: {  
                compress: {
                    sourcemap: true,
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true,
                    preserveComments : 'all'
                },
                target: {
                    files: [{
                         expand: true,
                         cwd: 'src',
                         src: ['**/*.js'],
                         dest: 'dist',
                         ext: '.min.js'
                    }]
                }
            }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'cssmin','uglify']);
};
