const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function(){
    dinosaur1 = new Dinosaur('Tyrannosaurus Rex', 2);
    dinosaur2 = new Dinosaur('Velociraptor', 4);
    dinosaur3 = new Dinosaur('Triceretops', 1);

  });

    it('should have type', function(){
      assert.strictEqual(dinosaur2.type, 'Velociraptor');
    });

    it('should have offspring', function(){
      assert.strictEqual(dinosaur1.offspring, 2);
    });

});
