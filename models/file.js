const db = require('../utils/database').db;

class File {
  static all(callback) {
    db('files')
      .select()
      .asCallback((error, files) => {
        let message = 'success';
        if (error) {
          console.error(error);
          message = error.message;
        }
        callback(files, message);
      });
  }

  static add(file, callback) {
    db('files')
      .insert(file)
      .asCallback(error => {
        if (error) {
          console.error(error);
          callback(error.message);
        } else {
          callback('success');
        }
      });
  }

  static delete(id, callback) {
    db('files')
      .where('id', id)
      .del()
      .asCallback(error => {
        if (error) {
          console.error(error);
          callback(error.message);
        } else {
          callback('success');
        }
      });
  }

  static search(keyword, callback) {
    //const keywordList = keywords.split(' ');
    db('files')
      .whereRaw('LOWER(filename) LIKE ?', `%${keyword.toLowerCase()}%`)
      .orWhereRaw('LOWER(description) LIKE ?', `%${keyword.toLowerCase()}%`)
      .orWhereRaw('LOWER(uploader) LIKE ?', `%${keyword.toLowerCase()}%`)
      .orWhereRaw('LOWER(time) LIKE ?', `%${keyword.toLowerCase()}%`)
      .asCallback((error, files) => {
        let message = 'success';
        if (error) {
          console.error(error);
          message = error.message;
        }
        callback(files, message);
      });
  }
}

module.exports.File = File;
