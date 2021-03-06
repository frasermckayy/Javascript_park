const assert = require('assert');
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js');


describe('park', function(){

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur('Tyrannosaurus Rex', 2);
    dinosaur2 = new Dinosaur('Velociraptor', 4);
    dinosaur3 = new Dinosaur('Triceretops', 1);

  })

  it('should have empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  });

  it('should be able to add dinosaurs to enclosure', function(){
   park.addDinosaur(dinosaur1);
   park.addDinosaur(dinosaur2);
   park.addDinosaur(dinosaur3);
   assert.strictEqual(park.enclosure.length, 3);
 });

  it('should be able to remove all the dinosaurs of the same type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.removeDinosaursOfSameType('Velociraptor');
    assert.strictEqual(park.enclosure.length, 1);
  });

});
