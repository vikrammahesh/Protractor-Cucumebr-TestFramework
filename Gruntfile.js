module.exports = function(grunt) {
  grunt.initConfig({
    protractor: {
      test:{
        options: {
          configFile: "protractor.conf.js",
          keepAlive: false, // If false, the grunt process stops when the test fails.
          args: {
              params: {
              	testEnv: 'test'
              },
          }
        }
      },
    },

 })

grunt.loadNpmTasks('grunt-protractor-runner');
grunt.registerTask('default', ['protractor:test']);
};