const assert = require('assert');
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js');


describe('park', function(){

  let park;

  beforeEach(function(){
    park = new Park();
    
  })

  it('should start empty', function(){
    const park = new Park();
    assert.strictEqual(park.empty, 0);
  });


});
