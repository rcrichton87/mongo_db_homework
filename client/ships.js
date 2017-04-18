var Ships = function(){}

Ships.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  all: function(callback){
    var self = this; 
    this.makeRequest("http://localhost:3000/api/ships", function(){
      if(this.status !== 200) return; 
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      callback(results);
    });
  }
}

module.exports = Ships;