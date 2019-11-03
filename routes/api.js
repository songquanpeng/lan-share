const express = require('express');
const router = express.Router();
const File = require('../models/file').File;
const upload = require('../middlewares/upload').upload;

router.post('/upload', upload.single(), function(req, res) {
  const currentTime = new Date();
  File.add(
    {
      filename: req.body.filename,
      description: req.body.description,
      uploader: req.body.uploader,
      link: '/public/downloads/' + req.file.filename,
      time: currentTime.toLocaleString()
    },
    message => {
      res.json(message);
    }
  );
});

router.delete('/file:id', function(req, res) {
  const id = req.params.id;
  File.delete(id, message => {
    res.json(message);
  });
});

module.exports = router;
