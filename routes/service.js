const express = require('express');
const router = express.Router();
const Service = require('../models/service-provider');


router.get('/service', (req, res, next) => {
    Service.find()
      .then(serviceFromDB => {
        res.status(200).json( serviceFromDB );
      })
      .catch(error => {
        res.status(400).json(error);
      });
  });


  router.post('/service/add', (req, res, next) => {
  const { plumber, cleaner, contractor, roofer  } = req.body;
  const newService= new Service({ plumber, cleaner, contractor, roofer});
  newService.save()
  .then((service) => {
    res.status(200).json( serviceFromDB );
  })
  .catch((error) => {
    res.status(400).json(error);
  });
});

router.put('/service/:id/update', (req, res, next) =>  {
    Service.findById(req.params.id)
    .then(( serviceFromDB) =>{
    serviceFromDB.set({
       plumber    = req.body.plumber,
       cleaner    = req.body.cleaner,
       contractor = req.body.contractor,
       roofer     = req.body.roofer,

    });
    serviceFromDB.save()
    .then((serviceFromDB) => {
        res.status(200).json(serviceFromDB)
    })
    .catch((error) => {
        res.status(400).json(error);
    });
});
});

router.delete('/service/:id/delete', (req, res, next) => {
    Service.findByIdAndRemove(req.params.id)
    .then((serviceFromDB)  => {
        res.status(200).json(serviceFromDB)
    })
    .catch((error) => {
        res.status(400).json(error);
    });
});



module.exports = router;