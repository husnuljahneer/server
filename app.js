const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//require environment variables
require('dotenv').config();
const PORT = process.env.PORT;
//use all the express middleware
app.use(bodyParser.json());
app.use(cors());
app.use(urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

//listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
