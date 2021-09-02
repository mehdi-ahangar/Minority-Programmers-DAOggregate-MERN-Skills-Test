const express = require('express');
const cors = require('cors');
const DaoRouter = require('./DAO.Router');
//const path= require ('path');
//const fs = require('fs');


const app = express();
app.use( cors());
app.use(express.json());

// DAO route handler
app.use('/', DaoRouter);

const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Mock server is running on port ${port}`));