path = require('path')

module.exports = function(options = {}) {
    // Allow name to be set by options
    const name = options.name ? options.name : 'fulcrum-provider'
    const Model = options.model ? options.model : path.join(__dirname, 'model.js')
    const routes = options.routes ? options.routes : path.join(__dirname, 'routes.js')
    const Controller = options.controller ? options.controller : path.join(__dirname, 'controllers.js')
  
    return {
        name,
        type: 'provider',
        version: require(path.join(__dirname, 'package.json')).version,
        Model,
        hosts: true,
        disableIdParam: false,
        routes,
        Controller
      }
  }
