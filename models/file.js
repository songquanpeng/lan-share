const db = require('../utils/database').db;

class File {
  static all(callback) {
    db('files')
      .select()
      .asCallback((error, files) => {
        let message = 'success';
        if (error) {
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
          callback(error.message);
        } else {
          callback('success');
        }
      });
  }

  static search(keyword, callback) {
    //const keywordList = keywords.split(' ');
    db('files')
      .where('filename', 'ilike', `%${keyword}%`)
      .orWhere('description', 'ilike', `%${keyword}%%`)
      .asCallback((error, files) => {
        let message = 'success';
        if (error) {
          message = error.message;
        }
        callback(files, message);
      });
  }
}

module.exports.File = File;
