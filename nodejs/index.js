const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');
// const { response } = require('express');
dotenv.config();

app.use(cors());
app.get('/', (req, res) => {
  res.send('go to /weather to see weather')
});

app.get('/weather/:location', (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&APPID=${process.env.REACT_APP_WEATHER_KEY}`)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.log(error.response)
    });
});

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port} `);
});