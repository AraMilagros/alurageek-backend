const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;