const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});