const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = ('express-session');
const controller = require('./serverCtrl.js')
const connectionString = "postgres://dmayes@localhost/photogNetwork";
const massiveInstance = massive.connectSync({connectionString: connectionString})
const port = 2222;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('db', massiveInstance);

app.listen(port, () => {
  console.log(`listening on port ${port}`)


app.post('/createVendor', controller.createVendor)


module.exports = app;
