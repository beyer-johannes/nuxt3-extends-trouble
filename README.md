# Problem

Server api endpoints from the main project can not import files from 
an other directory.

## Example

In this example, `foo-app` extends from `bar-app`.

If you make following:

    $ cd foo-app && yarn && yarn build

the command line will show you following error:

    ERROR  Rollup error: Could not load /[ABSOLUTE_PATH]/nuxt3-extends-trouble/foo-app/server/helper/useHelloWorld: ENOENT: no such file or directory, open '/[ABSOLUTE_PATH]/nuxt3-extends-trouble/foo-app/server/helper/useHelloWorld'

Nuxt try to load an file, coming from bar-app, in the foo-app directory.