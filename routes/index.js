const express = require('express');
const router = express.Router();
const File = require('../models/file').File;

router.get('/', function(req, res, next) {
  let query = req.query.query;
  if (query === undefined) {
    File.all((files, message) => {
      res.render('index', {
        files: files.reverse(),
        message: message
      });
    });
  } else {
    File.search(query, (files, message) => {
      res.render('index', {
        files: files.reverse(),
        message: message
      });
    });
  }
});

module.exports = router;
