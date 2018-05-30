const apiRouter = require('express').Router();

const eventRouter = require('./eventRouter');
const authRouter = require('./authRouter');
const favoriteRouter = require('./favoritesRouter');

// catching the routes for /events path and /auth path
// whatever is in that path it will render through the apiRouter
apiRouter.use('/events', eventRouter);
apiRouter.use('/auth', authRouter);
apiRouter.use('/auth', favoriteRouter);

module.exports = apiRouter;
