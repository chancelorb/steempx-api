const Photo = require('../models/photo');

function getAll(req, res, next) {
  Photo.getAll()
    .then(data => {
      res.locals.photos = data;
      next();
    }).catch(next);
}

// // take the data and assign it to data variable
// function getOne(req, res, next) {
//   Event.getOne(req.params.id)
//   .then(data => {
//     res.locals.events = data;
//     next();
//   }).catch(next);
// }
//
//
function create(req, res, next) {
  Photo.create(req.body)
  .then(data => {
    res.locals.photos = data;
    console.log(res.locals.photos);
    next();
  }).catch(next);
}
//
// function destroy(req, res, next) {
//   Event.destroy(req.params.id)
//     .then(data => {
//     // res.locals.events = data;
//     // console.log(res.locals.events);
//     next();
//   }).catch(next);
// }
//
// function update(req, res, next) {
//   Event.update(req.body)
//     .then(data => {
//     res.locals.events = data;
//     next();
//   }).catch(next);
// }

module.exports = {
  getAll,
  create
}
