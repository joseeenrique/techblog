const router = require('express').Router();
const { User } = require('../../models');
//get route
router.get('/', (req, res) => {
    User.findAll(
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }));
});
//post route
router.post('/', (req, res) => { 
    User.create(
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }));
});