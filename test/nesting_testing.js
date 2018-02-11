const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

// Describe our tests
describe('Nesing records', function(){

  // drop author collection
  beforeEach(function(done){
    mongoose.connection.collections.authors.drop(function(){
      done();
    })
  });

  // Create tests for sub docs
  it('Creates an author with sub-documents',function(done){

    var pat = new Author({
      name:'Harry Porter',
      books: [{title:'Hargwarz', pages:1992}]
    });

    pat.save().then(function(){
      Author.findOne({name: 'Harry Porter'}).then(function(record){
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it('Adding new book to an anthor', function(done){
    var pat = new Author({
      name:'Harry Porter',
      books: [{title:'Hargwarz', pages:1992}]
    });

    pat.save().then(function(){
      Author.findOne({name: 'Harry Porter'}).then(function(record){
        // add a book
        record.books.push({title:'Batman?', pages:2});
        record.save().then(function(){
          Author.findOne({name: 'Harry Porter'}).then(function(result){
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });

});
