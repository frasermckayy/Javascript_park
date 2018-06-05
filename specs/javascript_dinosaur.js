const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('dinosaur', function(){

  it('should have a type', function(){
    const dinosaur = new Dinosaur();
    assert.strictEqual(dinosaur.type, "Tyrannosaurus Rex")
  });
});
