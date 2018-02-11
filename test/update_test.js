const assert = require ('assert');
const MarioChar = require('../models/mariochar');

describe('Updating records',function(){
  var char;

  beforeEach(function(done){
      char = new MarioChar({
      name: 'Mario',
      weight: 24
    });

    char.save().then(function(){
      done();
    });
  });

  // char.update()
  // MarioChar.update({})
  // MarioChar.findOneAndUpdate({},{})

  it('Update a record weight in the database',function(done){

    // asychronous
    MarioChar.findOneAndUpdate({weight:33}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(result){
        assert(result.weight === 33);
        done();
      });
    });

  });

  it('Update a record name',function(done){

    // asychronous
    MarioChar.findOneAndUpdate({name:'Mario'},{name:'Luigi'}).then(function(){
      MarioChar.findOne({_id: char._id}).then(function(result){
        assert(result.name === 'Luigi');
        done();
      });
    });

  });

  // https://docs.mongodb.com/manual/reference/operator/update/
  // Update operator
  it('Update all weight by 1',function(done){

    // asychronous
    MarioChar.update({}, { $inc: {weight: 1}}).then(function(){
      MarioChar.findOne({name:'Mario'}).then(function(record){
        assert(record.weight === char.weight + 1);
        done();
      });
    });

  });

})
