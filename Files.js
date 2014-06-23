define(['altair/facades/declare',
        'liquidfire/modules/apollo/mixins/_HasPropertyTypesMixin',
        'apollo/_HasSchemaMixin',
        'lodash',
        'altair/plugins/node!path'
], function (declare,
             _HasPropertyTypesMixin,
             _HasSchemaMixin,
             _,
             pathUtil) {

    return declare([_HasPropertyTypesMixin, _HasSchemaMixin], {

        /**
         * Pass a file name and I'll add the uploadDir to it.
         *
         * @param file
         */
        resolveUploadedFilePath: function (file, options) {

            var path = pathUtil.join(this.get('uploadDir', null, options), file);

            return path;

        }

    });

});