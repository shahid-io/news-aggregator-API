const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_API_URL: process.env.NEWS_API_URL,
};