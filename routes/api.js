const apiRouter = require('express').Router();

const photoRouter = require('./photoRouter');
// const authRouter = require('./authRouter');
// const favoriteRouter = require('./favoritesRouter');

// catching the routes for /events path and /auth path
// whatever is in that path it will render through the apiRouter
apiRouter.use('/pic', photoRouter);
// apiRouter.use('/auth', authRouter);
// apiRouter.use('/fav', favoriteRouter);

module.exports = apiRouter;
