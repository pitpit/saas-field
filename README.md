# saas-field

A sandbox with webpack + saas-loader to demonstrate how to use "resolve" in webpack to resolve 3rd party scss files from fields "saas" or "style" in package.json.

## Usecase:

bootstrap-saas package has [a field "saas" in its package.json](https://github.com/twbs/bootstrap-sass/blob/master/package.json#L7). We want to use it to import bootstrap'stylesheet simply with:

    @import '~bootstrap-sass'

instead of:

    @import '~bootstrap-sass/assets/stylesheets/_bootstrap.scss'