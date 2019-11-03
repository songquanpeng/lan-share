const multer = require('multer');

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, './public/downloads/');
    },
    filename: function(req, file, callback) {
      let newName = new Date().getTime() + '-' + file.originalname;
      callback(null, newName);
    }
  })
});

module.exports = {
  upload: upload
};
