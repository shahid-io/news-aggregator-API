const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const newsRouter = require('./routes/newsRoutes');

const app = express();

/** configuration */
dotenv.config();

/** middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** routes */
app.use('/api', newsRouter);


/** sample route */
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));


/** listen for requests */
app.listen(process.env.port || 4000, () => {
    console.log('now listening for requests');
});

