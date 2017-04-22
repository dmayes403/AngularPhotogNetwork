const app = require('./index');
const db = app.get('db');

module.exports = {
    createVendor: function(req, res){
      console.log(req.body);
      db.run(`insert into Vendor (firstName, lastName, profileURL, businessName, state, city, email, phone, username, password)
              values (${req.body.firstName}, ${req.body.lastName}, ${req.body.profileURL}, ${req.body.businessName}, ${req.body.state},
                      ${req.body.city}, ${req.body.email}, ${req.body.phone}, ${req.body.username}, ${req.body.password})`,
        function(err, vendor){
      // db.run(`select * from vendor`, function(err, vendor){
        if(err){
          return res.status(500).send(err)
        }
        return res.send();
      })
    }
}
