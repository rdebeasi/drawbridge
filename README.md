# drawbridge

>  Password reset and (eventually) account management for CASL

## Environment variables

Environment variables can be accessed on the client side like such:
```
console.log(process.env.NODE_ENV);
```

This variable looks like a node.js environment variable, but it's actually set during the build using webpack's [DefinePlugin](https://webpack.js.org/plugins/define-plugin/). Environment variables can come from:

- Global constants in the `/config` folder (`dev.env.js`, etc.). These files set `NODE_ENV` to `development` when you run a dev build and `production` when you run a prod build.
- Environment variables from a [dotenv](https://www.npmjs.com/package/dotenv) file at the root of the project.
- "Real" environment variables from the OS. These take precedence over variables in the dotenv file.

Before using environment variables from the OS or dotenv, you'll need to list them in `/config/system.js`. References to these variables are replaced with the variable values
during build, so doing something like `console.log(process.env)` will not enumerate
all the available environment variables.

OS and dotenv environment variable support isn't part of the stock vue-webpack setup; these features

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
