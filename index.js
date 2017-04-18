const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = ('express-session');
const port = 4334;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
