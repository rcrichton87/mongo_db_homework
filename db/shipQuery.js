var MongoClient = require('mongodb').MongoClient;

var ShipQuery = function(){
  this.url = "mongodb://localhost:27017/mongo_homework";
};

ShipQuery.prototype = {
  all: function(onQueryFinished){ 
    MongoClient.connect(this.url, function(err, db){ 
      if(db){
        var collection = db.collection('starwars');
        collection.find().toArray(function(err, docs){ 
          onQueryFinished(docs); 
        });       
      }
    });
  }
}

module.exports = ShipQuery;