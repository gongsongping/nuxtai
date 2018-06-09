const {
  Nuxt,
  Builder
} = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

const bodyParser = require("body-parser");
// import {createConnection, getManager} from "typeorm";
// import cors from 'cors';
const cors = require('cors')

// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
const axios = require('axios')
const URL = require('url-parse')

app.use(bodyParser.json());
app.use(cors());


app.post('/napi/url', async function (req, res, next) {
  console.log('----------body-parser', req.body.url);
  if (!req.body.url) {
    return
  }
  let resp = await axios.get(req.body.url)

  res.json({
    domString: resp.data
  })
})


app.get('/test', function (req, res, next) {
  res.json({
    test: 'test'
  })
})

app.use(nuxt.render)


//不能使用'0.0.0.0'
new Builder(nuxt).build()
  .then(function () {
    console.log('-----build over------');
    app.listen(3000, function () {
      console.log('--nuxt------listen', 3000, '------');
    });
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })



// nuxt.listen(3000, '0.0.0.0')
