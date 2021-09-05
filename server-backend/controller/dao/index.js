const path = require('path');
const daoRepo = require('../../dal/dao.repo');
const _ = require("lodash");
const { Console } = require('console');
const { result, parseInt } = require('lodash');
const multiparty = require('multiparty');
const { update } = require('../../dal/dao.repo');
const { json } = require('body-parser');
//const logoApi= "http://localhost:5000/logo/";
const logoApi= "http://dao-api.vercel.app/logo/";

const controller = {

    add: (req, res) => {

        let form = new multiparty.Form();
        let newDao = {}, req2 = {}; 
      
        multer = require('multer'),
        storage = multer.diskStorage({
            destination: function (req, file, next) {
                next(null, './data/Icon/');
                
            },
            filename: function (req, file, next) {
               
                controller.getNextId( (result) => {

                    newDao.id = result;
                    newDao.img = logoApi + newDao.id +".jpg";
                      next(null,newDao.id+".jpg");
                                  
                });     
                      
            }
        }),
        upload = multer({ storage: storage }),
       
        fUpload = upload.fields([{ name: 'daoIcon', maxCount: 1 }]); 
        fUpload(req, res, function (err) {
            if (err) {
                console.log("An error occurred when uploading");
            } else {
                      res.send("Form data saved!");
                              
            }
        });                     
      
      
        form.parse(req, function (err, fields, files) {


            Object.keys(fields).forEach(function (name) {
                console.log('got field named ' + name);
            });

            Object.keys(files).forEach(function (name) {
                console.log('got file.. ' + name);

            });

            if (files[0]) {

            }
           
            if (!fields) {
                console.log("error");
                res.status(400).send({ message: 'ERROR!!:New DAO is empty.' });
            }
            newDao.full_name =  fields["full_name"].toString();
               
            newDao.category = fields["category"].toString();
            newDao.aum = fields["aum"].toString();
            newDao.description = fields["description"].toString();
            newDao.date_founded = fields["date_founded"].toString();
            newDao.date_created = fields["date_created"].toString();
            newDao.governance_token_name = fields["governance_token_name"].toString();
            newDao.governance_token_symbol = fields["governance_token_symbol"].toString();
            newDao.dao_structure = fields["dao_structure"].toString();
            newDao.voting_process = fields["voting_process"].toString();
            newDao.TVL = fields["TVL"].toString();
            newDao.tech_stack = fields["tech_stack"].toString();
            newDao.notes = fields["notes"].toString();
            newDao.blockchain = fields["blockchain"].toString();
            newDao.headquarters = fields["headquarters"].toString();
             newDao.socialnetworks={
                    twitter_handle:  fields["twitter_handle"].toString(),
                    telegram_handle:  fields["telegram_handle"].toString(),
                    linkedin_company_name:  fields["linkedin_company_name"].toString(),
                    discord_link:  fields["discord_link"].toString(),  
                    github_organization_handle : fields["github_organization_handle"].toString()       
                    };             

          daoRepo.create(newDao, (err, result) => {

            if (err) res.status(500).send(err);
            
        });    
        
  });
             
    },
    
//****************************************************************
    fetchAll: (req, res) => {

        const data = { DAOs: [] , socialnetworks:[]};
        daoRepo.fetchAll((err, data1) => {
            if (err) {
                res.status(500).send(err);
                return;

            }
            else data.DAOs = data1;
            if (req.query.q) {
            
                const result = _.filter(data.DAOs, item =>
                    item.full_name.toLowerCase().includes(req.query.q.toLowerCase()));
                res.json(result);
            } else {

                res.json(data.DAOs);
              //  res.json(data.DAOs, data.socialnetworks);
            }

        })

    },
//***************************************************************
    fetchById: (req, res) => {

        const data = { DAOs: [] };
        daoRepo.fetchAll((err, data1) => {
            if (err) {
                res.status(500).send(err);
                return;

            }
            else data.DAOs = data1;
            const result = _.filter(data.DAOs, item => item.id == req.params.id);


            res.json(result);

        }
        );

    },
//****************************************************************
    update: (req, res) => {

        let form = new multiparty.Form();
        let  socialnetworks={}, updateDao = {}, req1 = {};
        
        form.parse(req, function (err, fields, files) {
               
               
                if (files['daoIcon'])
                       updateDao.img = logoApi+fields["id"].toString()+".jpg";
                      

                
                updateDao.id = parseInt(  fields["id"] );

                updateDao.full_name =  fields["full_name"].toString();
                updateDao.category = fields["category"].toString();
                updateDao.aum = fields["aum"].toString();
                updateDao.description = fields["description"].toString();
                updateDao.date_founded = fields["date_founded"].toString();
                updateDao.date_created = fields["date_created"].toString();
                updateDao.governance_token_name = fields["governance_token_name"].toString();
                updateDao.governance_token_symbol = fields["governance_token_symbol"].toString();
                updateDao.dao_structure = fields["dao_structure"].toString();
                updateDao.voting_process = fields["voting_process"].toString();
                updateDao.TVL = fields["TVL"].toString();
                updateDao.tech_stack = fields["tech_stack"].toString();
                updateDao.notes = fields["notes"].toString();
                updateDao.blockchain = fields["blockchain"].toString();
                updateDao.headquarters = fields["headquarters"].toString();
    
                socialnetworks.twitter_handle = fields["twitter_handle"].toString();
                socialnetworks.github_organization_handle = fields["github_organization_handle"].toString();
                socialnetworks.telegram_handle = fields["telegram_handle"].toString();
                socialnetworks.linkedin_company_name = fields["linkedin_company_name"].toString();
                socialnetworks.discord_link = fields["discord_link"].toString();

                    updateDao.socialnetworks={
                        twitter_handle:  fields["twitter_handle"].toString(),
                        telegram_handle:  fields["telegram_handle"].toString(),
                        linkedin_company_name:  fields["linkedin_company_name"].toString(),
                        discord_link:  fields["discord_link"].toString(),  
                        github_organization_handle : fields["github_organization_handle"].toString()       
                        };

                
                daoRepo.update(updateDao.id,updateDao, socialnetworks, (err, result) => {

                    if (err) res.status(500).send(err);
                })
        });        
           
        multer = require('multer'),
        storage = multer.diskStorage({
            destination: function (req, file, next) {
                next(null, './data/Icon/')
            },
            filename: function (req, file, next) {
                console.log("saving images in multer...");
               
              if (req.body.id)
                next(null, req.body.id+".jpg");           
                      
            }
        }),
        upload = multer({ storage: storage }),
        fUpload = upload.fields([{ name: 'daoIcon', maxCount: 1 }]);
        fUpload(req, res, function (err) {
            if (err) {
                console.log("An error occurred when uploading");
            } else {
                res.send();
            }
        });
        
        console.log("ssss"+ updateDao.full_name);

    },
    //***************************************************************
    getNextId: (next) => {
        let data = { DAOs: [] };
        let result2 = 0;
        daoRepo.fetchAll((err, data1) => {
            if (err) {
                res.status(500).send(err);
                return;

            }
            else
                data.DAOs = data1;
            let result = 0;
            result = data.DAOs.reduce((max, a) => {

                return ((parseInt(a.id) && max < parseInt(a.id)) ? a.id : max);
            }, 0);
            result2 = parseInt(result) + 1;
           
            next(result2);
        });

    },
//********************************************************************
    fetchBy_Id: (req, res) => {

        const data = { DAOs: [] };
        daoRepo.fetchAll((err, data1) => {
            if (err) {
                res.status(500).send(err);
                return;

            }
            else data.DAOs = data1;
            const result = _.filter(data.DAOs, item => item._id == req.params._id);


            res.json(result);

        }
        );

    },
//**************************************************************
  
  
}

module.exports = controller;
