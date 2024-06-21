const mongoose = require('mongoose');
const PersonSchema = require('../schemas/person.schema');

module.exports = mongoose.model('PersonModel', PersonSchema);