
const express = require('express');
const cors = require('cors');
const DaoRouter = require('./DAO.Router');
const repoBase = require('./dal/base.repo');
const daoRepo = require ('./dal/dao.repo');
const bodyParser = require ('body-parser');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( cors());


// DAO route handler
app.use('/', DaoRouter);
app.use('/logo',express.static('data/Icon/'));  

const port = process.env.PORT || 3000;
//const port = 80;
app.listen( port, () => console.log(`Mock server is running on port ${port}`));
