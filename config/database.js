const mongoose = require('mongoose');
const uri = "mongodb://localhost/qa";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log('Successfully connected to MongoDB.');
})
.catch((err) => {
  console.error(err);
})

require('../src/models/questions.js');
require('../src/models/answerPhotos.js');
require('../src/models/answers.js');

let db = mongoose.connection;

module.exports = { db }

