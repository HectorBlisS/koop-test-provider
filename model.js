require('dotenv').config()
const axios = require('axios') // request is now deprecated

class Model {}

Model.prototype.getData = (req, callback) => {
  const { params: { host, id }, query: { where } } = request

  // Use 'host' and 'id' to build URL to remote API
  request(`https://${host}/resource/${id}.geojson`, (err, res, geojson) => {

    if (err) return callback(err)
    //  geojson.filtersApplied = { where: true }
    geojson.metadata = { geometryType: 'Point' }
    callback(null, geojson)
  })

}

// Model.prototype.getData = (req, callback) => { // if this comes from express is not posible to make a http get
//   // using axios because request is now deprecated
//   const options = {
//       method:"get"
//   }
//   axios(process.env.GEOJSON_API_URL, options)
//   .then(({data:geojson})=>{
//     // Set metadata used by Koop
//     geojson.metadata = { geometryType: 'Point' }
//     callback(null, geojson)
//   })
//     // if the http request fails, return and callback with error
//   .catch(callback)
// }

module.exports = Model
