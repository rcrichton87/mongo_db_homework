var UI = function() {
  var ships = new Ships();

  ships.all(function(results){
    this.render(results);
  }.bind(this));
  
}

UI.prototype = {
  createText: function(text, label) {
    var p = document.createElement('p');
    p.innerText = label + text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(ships) {
    var container = document.getElementById('ships');

    for (var ship of ships) {
      var li = document.createElement('li');
      this.appendText(li, ship.name, 'Ship: ');
      this.appendText(li, ship.speed, 'Speed: ');

      container.appendChild(li);
    }
  }
}

module.exports = UI;