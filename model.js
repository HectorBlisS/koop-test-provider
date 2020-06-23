require('dotenv').config()
const { translate } = require('./utils')
const axios = require('axios') // request is now deprecated

function Model () {}

Model.prototype.getData = (req, callback) => { // if this comes from express is not posible to make a http get
  // using axios because request is now deprecated
  const options = {
      method:"get"
  }
  const url = "http://localhost:3002/api/v2/query?"
  const token = req.params.id

  axios(`${url}token=${token}&format=geojson`, options)
  .then(({data})=>{
    // Set metadata used by Koop
    const geojson = translate(data)
    geojson.metadata = geojson.metadata || {}
    geojson.metadata.geometryType = geojson.features[0].geometry.type || "Point"
    callback(null, geojson)
  })
    // if the http request fails, return and callback with error
  .catch(callback)
}

module.exports = Model
