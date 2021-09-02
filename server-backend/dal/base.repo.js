const mongodb = require('mongodb').MongoClient;
const cs='mongodb+srv://dao:temporary2020@cluster0.ybo6o.mongodb.net/dao?retryWrites=true&w=majority';
//const cs= "mongodb://localhost:27017/dao";
let theDB = undefined;
const connect = (next) => {

    if (theDB) {
        next(null, theDB);
        return;
    }
    
    mongodb.connect(cs, (err, client) => {

        if (err) next(err);
        else {
            theDB = client.db();
            next(null, theDB);
            //console.log(err, client);
        }

    });
}
module.exports.connect = connect;