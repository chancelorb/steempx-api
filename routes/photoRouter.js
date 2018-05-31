const photoRouter = require('express').Router();
const photoController = require('../controlers/photoController');
const respController = require('../controlers/responseController');

photoRouter.route('/')
  .get(
    photoController.getAll,
    respController.sendOkResp,
    respController.sendErrResp);

//create a post
photoRouter.route('/new')
  .post(
    photoController.create,
    respController.sendOkResp,
    respController.sendErrResp);

//get one post id
// photoRouter.route('/:id')
//   .get(
//     photoController.getOne,
//     respController.sendOkResp,
//     respController.sendErrResp)
//
//   .delete(
//     photoController.destroy,
//     respController.sendOkResp,
//     respController.sendErrResp)
//
//   .put(
//     photoController.update,
//     respController.sendOkResp,
//     respController.sendErrResp);

module.exports = photoRouter;
