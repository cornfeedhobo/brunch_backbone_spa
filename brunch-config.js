exports.config = {
    framework: 'backbone',
    modules: {
        definitions: false,
        wrappers: false
    },
    plugins: {
        sass: {
            debug: false,
            options: {
                includePaths: [
                    'bower_components/bourbon/app/assets/stylesheets/',
                    'bower_components/neat/app/assets/stylesheets/',
                    'bower_components/bitters/app/assets/stylesheets/'
                ]
            }
        }
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.js': /^app/,
                'js/vendor.js': /^bower_components/
            }
        },
        stylesheets: {
            defaultExtension: 'scss',
            joinTo: {
                'css/app.css': /^app/,
                'css/vendor.css': /^bower_components/
            }
        },
        templates: {
            defaultExtension: 'jade',
            joinTo: {
                'js/app.js': /^app/
            }
        }
    }
};
