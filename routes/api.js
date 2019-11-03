const express = require('express');
const router = express.Router();
const File = require('../models/file').File;
const upload = require('../middlewares/upload').upload;

router.post('/upload', upload.single('file'), function(req, res) {
  const currentTime = new Date();
  File.add(
    {
      filename: req.file.originalname,
      description: req.body.description,
      uploader: req.body.uploader,
      link: '/downloads/' + req.file.filename,
      time: currentTime.toLocaleString()
    },
    message => {
      req.flash('message', message);
      res.redirect('/');
    }
  );
});

router.post('/delete', function(req, res) {
  const id = req.body.id;
  const token = req.body.token;
  if (token === req.app.locals.config.token) {
    File.delete(id, message => {
      res.json({
        success: true,
        message: message
      });
    });
  } else {
    res.json({
      success: false,
      message: 'Token is invalid.'
    });
  }
});

module.exports = router;
