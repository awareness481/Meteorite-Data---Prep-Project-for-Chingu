const axios = require('axios');

module.exports = (app) => {
  app.get('/api/initial', (req, res) => {
    axios.get("https://data.nasa.gov/resource/gh4g-9sfh.json")
     .then((response) => {
       res.send(response.data);
     })
  })
}