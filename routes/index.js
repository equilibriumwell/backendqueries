var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/artists', function(req, res, next) {
  models.artists.findAll({}).then(artistsFound => {
    res.render('artists', {
      artists: artistsFound
    });
  });
});
module.exports = router;
