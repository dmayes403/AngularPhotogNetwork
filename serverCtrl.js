const app = require('./index');
const db = app.get('db');

module.exports = {
    createVendor: function(req, res){
      console.log(req.body);
      db.run(`insert into Vendor (firstName, lastName, profileURL, businessName, state, city, email, phone, username, password)
              values ('${req.body.firstName}', '${req.body.lastName}', '${req.body.profileURL}', '${req.body.businessName}', '${req.body.state}',
                      '${req.body.city}', '${req.body.email}', '${req.body.phone}', '${req.body.username}', '${req.body.password}')`,
        function(err, vendor){
        if(err){
          return res.status(500).send(err)
        }
        return res.send();
      })
    },

    getPhotographers: function(req, res){
      db.run(`select * from vendor`,
        function(err, vendors){
        if(err){
          return res.status(500).send(err)
        }
        return res.send(vendors);
      })
    },

    getGenre: function(req, res){
      // console.log(req.query)
      db.run(`SELECT *
	               FROM
    	             Vendor
                   JOIN vendorportfoliogenre ON vendorportfoliogenre.vendor_id = vendor.id
                  WHERE
                    vendorportfoliogenre.type = '${req.query.genreType}'`,
        function(err, photogs){
        if(err){
          return res.status(500).send(err)
        }
        return res.send(photogs);
      })
    },

    getIndividualPhotog: function(req, res){
      console.log(req.params)
      db.run(`SELECT *
	               FROM
    	          Vendor
                  JOIN vendorportfoliogenre ON vendorportfoliogenre.vendor_id = vendor.id
                  JOIN vendorportfolioimages ON vendorportfolioimages.vendor_id = vendor.id
                WHERE
    	           vendor.id = '${req.params.id}'`,
        function(err, individualPhotog){
        if(err){
          return res.status(500).send(err)
        }
        return res.send(individualPhotog);
      })
    },




}
