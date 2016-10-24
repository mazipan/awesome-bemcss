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
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};
