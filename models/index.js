const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.connect( process.env.MONGODB_URI ||
    "mongodb://localhost:27017/booksData",{ useNewUrlParser: true });

module.exports.books = require("./books.js");
