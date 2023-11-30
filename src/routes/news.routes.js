const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/news.controller');
const { AuthReqMiddleware } = require('../middlewares');



/** news routes */
router.get('/',AuthReqMiddleware.checkAuth, NewsController.getNews);

module.exports = router;