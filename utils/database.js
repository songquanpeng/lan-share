const knex = require('knex');
const sqlite3 = require('sqlite3').verbose();
new sqlite3.Database('data.db');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: 'data.db'
  },
  useNullAsDefault: true
});

function init() {
  db.schema.hasTable('files').then(function(exists) {
    if (!exists) {
      return db.schema
        .createTable('files', function(table) {
          table.increments('id').primary();
          table.string('filename', 100);
          table.text('description');
          table.string('uploader', 100);
          table.string('link', 120);
          table.string('time', 50);
          table.integer('downloadCounter', 10);
        })
        .then(
          value => {
            console.log('Database initialization completed.');
          },
          reason => {
            console.error(reason);
          }
        );
    }
  });
}

module.exports = {
  init: init,
  db: db
};
