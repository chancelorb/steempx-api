const db = require('../config/connection');

function getAll() {
  return db.any(`
    SELECT * FROM photos
    `);
}

// function getOne(id) {
//   return db.one(`
//     SELECT * FROM photos
//     WHERE id = $1
//     `, id);
// }
//
// //create event
// function create(photos) {
//   //the if statement is for users who logged in
//   //if the users are not logged in they cannot create
//
//   return db.one(`
//     INSERT INTO photos (event, text, img_url, user_id, location)
//     VALUES ($/event/, $/text/, $/img_url/, $/user_id/, $/location/)
//     RETURNING *
//     `, photos);
// }
//
// function destroy(id) {
//   return db.none(`
//     DELETE FROM photos WHERE id = $1
//     `, id);
// }
//
// function update(photos) {
//     return db.one(`
//     UPDATE photos
//     SET event = $/event/, text = $/text/, img_url = $/img_url/, location = $/location/
//     WHERE id = $/id/
//     RETURNING *
//     `, photos);
// }

module.exports = {
  getAll
}
