require('dotenv').config()
const axios = require('axios')

function Model () {}

Model.prototype.getData(request, callback) {
  // using axios because request is now deprecated
  const options = {
      method:"get"
  }
  axios(process.env.GEOJSON_API_URL, options)
  .then(()=>{
    // Set metadata used by Koop
    geojson.metadata = { geometryType: 'Point' }
    callback(null, geojson)
  })
    // if the http request fails, return and callback with error
  .catch(callback)
}

module.exports = Model