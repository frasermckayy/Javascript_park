const assert = require('assert');
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js');


describe('park', function(){

  it('should start empty', function(){
    const park = new Park();
    assert.strictEqual(park.empty, 0);
  });


});
