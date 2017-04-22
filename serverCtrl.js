const app = require('../index');
const db = app.get('db');

module.exports = {
    createVendor: function(req, res){
      db.run(`select * from Vendor where id = ${req.query.id}`, function(err, vendor){
        if(err){
          return res.status(500).send('Internal Server Error')
        }
        return res.send(vendor);
      })
    }
}
