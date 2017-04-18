var express = require('express');
var shipRouter = express.Router();
var ShipQuery = require('../db/shipQuery');
var shipQuery = new ShipQuery();

shipRouter.get('/', function(req, res){
  shipQuery.all(function(docs){ 
    res.json(docs);
  });
});

module.exports = shipRouter;