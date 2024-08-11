const { Schema, model } = require('mongoose');

const travelModel = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3
  },
  image: {
    type: String,
    required: true
  },
  descr: {
    type: String,
    required: true
  }
})

module.exports = model('Travel', travelModel);