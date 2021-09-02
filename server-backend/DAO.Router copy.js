const router = require("express").Router();
const { toInteger, toNumber } = require("lodash");
const _= require ("lodash");
const path = require('path');
const fs = require('fs');


//const daoFilePath = path.resolve(__dirname,'/data/daolist.json ');

const data = {

    DAOs: [

        {
            id: 1,
            full_name: 'Uniswap',
            description: 'aaa',
            date_founded: '1/1/2001',
            date_created: '1/1/2001',
            logo_link: 'ssss',
            category: 'dddd',
            governance_token_symbol: 'dddd',
            governance_token_name: 'ffff',
            dao_structure: 'wwwww',
            voting_process:'sss',
            TVL: 'eee',
            tech_stack: 'qqqq',
            notes: 'ssss',
            blockchain: 'aaa',
            headquarters: 'qqqq'
    } ],
};


router.get("/", (req, res)  => {

 fs.readFile('data/daolist.json', (err, data1) => {
        if (err){
            res.status(500).send(err);
            return;
           
        }
        data.DAOs = JSON.parse(data1);
        //console.log(data.DAOs[0]);
    })

    if(req.query.q){
        
        const result = _.filter(data.DAOs, item => 
            item.description.toLowerCase().includes(req.query.q.toLowerCase()) );
            res.json(result);
     } else{

        res.json(data.DAOs);
     }

    //res.json(data.DAOs);
});

router.get("/:id", (req, res) => {
   // res.json(_.find(data.DAOs, {id: req.params.id}));
   //res.json(_.find(data.DAOs, {id: toInteger(req.params.id)}))
   res.json(_.find(data.DAOs, {id: toNumber(req.params.id)}))
   //number

});

router.put('/', (req,res) => {

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

});


module.exports = router;