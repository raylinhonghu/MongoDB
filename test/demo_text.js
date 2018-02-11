const assert = require ('assert');

// we have to describe our tests
// we have a set of tests within that described block

// Describe tests: 2 parameters
describe('some demo tests',function(){

  // Create tests will pass or fail
  it('adds two numbers together',function(){
    // put our actual test code 
    // assert what we expect
    assert(2 + 3 === 5);
  })
})

// npm run test
// "test": "mocha"
