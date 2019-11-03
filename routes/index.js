const express = require('express');
const router = express.Router();
const File = require('../models/file').File;

router.get('/', function(req, res, next) {
  let query = req.query.search;
  if (query === '') {
    File.all((files, message) => {
      res.render('index', {
        files: files,
        message: message
      });
    });
  } else {
    File.search(query, (files, message) => {
      res.render('index', {
        files: files,
        message: message
      });
    });
  }
});

module.exports = router;
