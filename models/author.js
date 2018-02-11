const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create book schema
const BookSchema = new Schema({
  title: String,
  pages: Number,
});

// Create author schema
const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

// Create Model
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;
