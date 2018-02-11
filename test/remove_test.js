const assert = require ('assert');
const MarioChar = require('../models/mariochar');

describe('Deleting records',function(){
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
  });

  it('Delete a record from the database',function(done){

    // asychronous
    MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(result){
        assert(result === null);
        done();
      });
    });

  });

})
