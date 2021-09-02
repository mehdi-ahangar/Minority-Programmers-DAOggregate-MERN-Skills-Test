const baseRepo = require('./base.repo');

const repo = {

    create: (dao, next) => {

        baseRepo.connect((err, db) => {

            if (err) next(err);
            else {
                db.collection('dao').insertOne(dao, next);
                console.log("data inserted...");
            }
        })
    },
    //***********************************************************************
    fetchAll: next => {
        baseRepo.connect((err, db) => {

            if (err) next(err);
            else {
                db.collection('dao', 'socialnetworks').find({}).toArray(next);
                
            }
        })
    },
    //******************************************************************
    update2: (_id, updateDao, next) => {

        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                const objId = new mongoDb.ObjectID(_id);
                db.collection('dao').updateOne({ _id: objId }, { $set: updateDao }, next);

            }

        })
    },

    //**********************************************************************
    update: (Id, updateDao, socialnetworks,  next) => {

        baseRepo.connect((err, db) => {
            if (err) next(err);
            else {
                //const objId = new mongoDb.ObjectID(_id);
                console.log("hhhhh"+updateDao.id);
                db.collection('dao').updateOne({ id: parseInt(Id)}, { $set: updateDao }, next);
               // db.collection('social_networks').updateOne({ id: Id }, { $set: socialnetworks }, next);
              //  db.collection('dao').updateOne({ id: "10" }, { updateDao} , next);
               // db.collection('dao').insertOne(updateDao, next);
            }

        })
    }
    //*********************************************************************

}

module.exports = repo;