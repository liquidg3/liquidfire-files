define(['dojo/_base/declare', 'apollo/propertytypes/_Base'],

    function (declare, _Base) {


        return declare([_Base], {


            key:     'file',
            options: {
                uploadDir: {
                    type:    'path',
                    options: {
                        label:       'Thumb width',
                        description: 'The default width for thumbnails rendered',
                        required:    true
                    }
                }
            },


            toViewValue: function (value, options, config) {
                return 'we rendered a thumb!!!!';
            },


            /**
             * Not quite sure what to do here yet
             *
             * @param value
             * @param options
             * @param config
             * @returns {*}
             */
            toJsValue: function (value, options, config) {
                return value;
            },

            template: function (options) {
                return 'liquidfire:Files/views/file';
            },

            fromFormSubmissionValue: function (value, options, config) {

                if (value && value.size > 0) {

                    console.log('what to do?');

                }
                //if there is no image and it's not
                else {
                    return null;
                }

            }

        });

    });
