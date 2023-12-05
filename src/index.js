const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { ServerConfig, LoggerConfig, DBConfig } = require('./config');
const apiRoutes = require('./routes');

/** initiate express to app */
const app = express();

/** configuration */
dotenv.config();

/** middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** routes */
app.use('/api', apiRoutes);


/** sample route */
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to news-aggregator API',
}));


/** listen for requests */
app.listen(ServerConfig.PORT, () => {
    console.log(`Serving at http://localhost:${ServerConfig.PORT}`);
    LoggerConfig.info("Successfully started server", {});
    DBConfig.connect();
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;

