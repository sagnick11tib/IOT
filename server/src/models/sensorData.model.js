const moongose = require('mongoose');

const sensorDataSchema = new moongose.Schema({
    soilMoisture:{
        type: Number,
        required: true
    },
    temperature:{
        type: Number,
        required: true
    },
    humidity:{
        type: Number,
        required: true
    },

    },{timestamps: true});

const SensorData = moongose.model('SensorData', sensorDataSchema);
module.exports = SensorData;