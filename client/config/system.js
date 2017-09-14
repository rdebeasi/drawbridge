// This file lists the system environment variables that can be included via Webpack.
// These are environment variables from the OS, as opposed to the global constants
// set by webpack.DefinePlugin. The variables can also be set in a .env file.
//
// This feature has been added to the standard Vue Webpack config.

module.exports = [
  'IDM_HOST',
  'IDM_USER',
  'IDM_PASSWORD'
]
