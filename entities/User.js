const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullName: String,
    dateNaissance: Date,
    lieuNaissance: String,
    adresse: String,
    tel: String,
    numeroPermis: String,
    expPermis: Date,
    created: { type: Date, default: Date.now },
    
});

module.exports = mongoose.model("datas",schema);