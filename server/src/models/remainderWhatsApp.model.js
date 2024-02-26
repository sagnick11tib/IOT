const mongoose = require('mongoose');

const remainderWhatsAppSchema = new mongoose.Schema({
        remainderMsg:{
            type: String,
            required: true
        },
        remindAt:{
            type: String,
            required: true
        },
        isReminded:{
            type: Boolean,
            default: false
        }
        });

const RemainderWhatsApp = mongoose.model('RemainderWhatsApp', remainderWhatsAppSchema);

module.exports = RemainderWhatsApp;