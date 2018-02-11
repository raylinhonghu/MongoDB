var mongoose = require('mongoose');

// ES6  promise
mongoose.Promise = global.Promise;

// Connect to the db before tests run
before(function(done){

  // Connect to mongoDB, create one database 'testaroo', asychronous
  mongoose.connect('mongodb://localhost/testaroo');

  // when connection is open we fire function
  mongoose.connection.once('open',function(){
    console.log("Connection has been made!");
    done();
  }).on('error',function(error){
    console.log("connection error: ",error);
  })

})

// isolation tests: Drop the characters collection before each tests
// before each test is run
beforeEach(function(done){
  // Drop the collection                asychronous drop
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  })
})
