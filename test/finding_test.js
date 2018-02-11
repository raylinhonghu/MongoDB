const assert = require ('assert');
const MarioChar = require('../models/mariochar');

describe('Finding records',function(){
  var char;

  beforeEach(function(done){
      char = new MarioChar({
      name: 'Mario',
      weight: 24
    });

    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });
  })

  it('Finds a record from the database(By name)',function(done){

    // asychronous
    MarioChar.findOne({name: 'Mario'}).then(function(result){
      assert(result.name === 'Mario');
      done();
    });

  })

  it('Finds a record from the database (By ID)',function(done){

    // asychronous
    MarioChar.findOne({_id: char._id}).then(function(result){
      assert(result.id.toString() === char._id.toString());
      done();
    });

  })
})
