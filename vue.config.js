module.exports = {
    css: {
        extract: false,
        loaderOptions: {
            scss: {
                prependData: '@import "~@/styles/_main.scss";'
            }
        }
    },
    transpileDependencies: ['vuetify']
};