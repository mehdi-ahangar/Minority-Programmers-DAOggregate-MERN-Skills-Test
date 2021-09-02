const router = require("express").Router();
//const { toInteger, toNumber } = require("lodash");
//const _= require ("lodash");
//const path = require('path');
//const fs = require('fs');
//const { fetchAll } = require("./dal/dao.repo");
const daoRepo = require('./dal/dao.repo');
const daoController = require('./controller/dao');



//const data = { DAOs: []};
router.get("/", daoController.fetchAll);
router.get("/:id", daoController.fetchById);
//router.get("/images", express.static('data/Icon/'));
//router.get("/:id", daoController.fetchBy_Id );
//router.put('/update', daoController.update);
router.post('/add', daoController.add);
//router.post('/upload',daoController.upload);
router.post('/update',daoController.update);

{/*router.put('/', (req,res) => {

    const daoId = req.body.daoId;
    const newImage = req.body.newImage;

    fs.readFile('data/daolist.json', (err, data1) => {
        
        data.DAOs = JSON.parse(data1);
        //console.log(data.DAOs[0]);
        data.DAOs.forEach( (t,i) => {
            
            if (t.id === daoId)
            data.DAOs[i].img = newImage; 

        });
        data.DAOs = JSON.stringify(data);

        fs.writeFile('data/daolist.json', data, err => {
            if (err){
                res.status(500).send(err);
                return;
               
            }
            res.send(daoId) ;
        })
    })

});*/}


module.exports = router;