var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
const models = require('../models');

/* GET home page. */
router.get('/artists/:id', function(req, res, next) {
  let artistId = parseInt(req.params.id);
  models.artists
    .find({
      where: {
        ArtistId: artistId
      }
    })
    .then(artist => {
      res.render('specificArtist', {
        artist: artist
      });
    });
});
module.exports = router;
