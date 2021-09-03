
const express = require('express');
const cors = require('cors');
const DaoRouter = require('./DAO.Router');
const repoBase = require('./dal/base.repo');
const daoRepo = require ('./dal/dao.repo');
const bodyParser = require ('body-parser');
const fileUpload = require('express-fileupload');


//const path= require ('path');
//const fs = require('fs');
//app.use(bodyParser.urlencoded({ extended: true}));
//app.use(bodyParser.urlencoded());

//app.use(bodyParser.json());


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/*app.use(fileUpload({
    createParentPath: true
}));*/


//app.use(bodyParser.urlencoded({ extended: true }));

//app.use("/");
//app.use( express.bodyParser());
//app.use(bodyParser.json());
app.use( cors());
//app.use(express.urlencoded());
//app.use(/);
//app.use(bodyParser.urlencoded());
//app.use(express.json());

//repoBase();

// DAO route handler
app.use('/', DaoRouter);
app.use('/logo',express.static('data/Icon/'));  

//app.use('/data/Icon/', express.static('data/Icon/')); 
//app.use('/upload', DaoRouter);

const port = process.env.PORT || 8080;
//const port = 80;
app.listen( port, () => console.log(`Mock server is running on port ${port}`));
