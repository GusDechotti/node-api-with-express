const mongoose = require('mongoose');
const crypto = require('../../modules/crypto');

const PersonSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        min: 2,
        max: 100,
    },
    telefone: {
        type: String,
        required: true,
        min: 10,
        max: 14,
    },
    isNaty: {
        type: Boolean,
    },
},
{
  versionKey: false,
  timestamps: true,
});

module.exports = PersonSchema;