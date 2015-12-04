exports.config = {

    plugins: {
        sass: {
            debug: false,
            options: {
                includePaths: [
                    'bower_components/bourbon/',
                    'bower_components/neat/'
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
            defaultExtension: 'hbs',
            joinTo: {
                'js/app.js': /^app/
            }
        }
    }

};
