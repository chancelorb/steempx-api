const favoriteRouter = require('express').Router();
const favoriteController = require('../controllers/favoriteController');
const respController = require('../controllers/responseController');

favoriteRouter.route('/')
  .get(
    favoriteController.getAll,
    respController.sendOkResp,
    respController.sendErrResp);

//create an favorite
// favoriteRouter.route('/new')
//   .post(
//     favoriteController.create,
//     respController.sendOkResp,
//     respController.sendErrResp);
//
// //get one favorite id
// favoriteRouter.route('/:id')
//   .get(
//     favoriteController.getOne,
//     respController.sendOkResp,
//     respController.sendErrResp)
//
//   .delete(
//     favoriteController.destroy,
//     respController.sendOkResp,
//     respController.sendErrResp);

module.exports = favoriteRouter;
