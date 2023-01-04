var express = require('express');
var router = express.Router();
const User = require("../entities/User");


router.post('/', async function(req, res, next) {
  
  const 
  {
    fullName, dateNaissance, lieuNaissance, adresse,
    tel, numeroPermis, expPermis
  } = req.body

  await new User ({
    fullName,
    dateNaissance,
    lieuNaissance,
    adresse,
    tel,
    numeroPermis,
    expPermis,
  }).save({ upsert: true })
  .then(( ) => res.send({msg:"Enregistrement Reussi!"}))
  .catch(e => res.send(e) );

});

router.get('/', async function(req, res, next) {
  const userDatas = await User.find();
  res.send(userDatas)
});

module.exports = router;
