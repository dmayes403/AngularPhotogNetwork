const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = ('express-session');
const port = 2222;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

const connectionString = "postgres://dmayes@localhost/photogNetwork";
const massiveInstance = massive.connectSync({connectionString: connectionString})
app.set('db', massiveInstance);

module.exports = app;

const controller = require('./serverCtrl.js');
app.post('/createVendor', controller.createVendor);
app.get('/getPhotographers', controller.getPhotographers);
app.get('/getGenre', controller.getGenre);
