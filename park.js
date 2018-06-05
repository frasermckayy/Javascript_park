const Dinosaur = require('./dinosaur.js');

const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaurType) {
for(var i = 0;i < dinosaurType.length; i++)
//no idea whats going on here
};


module.exports = Park;
