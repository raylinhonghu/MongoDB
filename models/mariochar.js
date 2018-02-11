const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const MarioCharSchema = new Schema({
  name: String,
  weight: Number
});

// create a model based a schema in mariochar collection
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// exports so we can do: var myChar = new MarioChar({});
module.exports = MarioChar;
