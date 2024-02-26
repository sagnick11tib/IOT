const RemainderWhatsapp  = require("../models/remainderWhatsApp.model.js");
const SensorData = require('../models/sensorData.model.js');
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const asyncHandler = require('../utils/asyncHandler.js');


const dailyWhatsappReportSendOnNotification = asyncHandler(async (req, res) =>{
    const {soilMoisture, temperature, humidity} = req.body;
        // soilMoisture = 50;
        // temperature = 30;
        // humidity = 60;
    if(!soilMoisture || !temperature || !humidity){
        throw new ApiError(400, `${!soilMoisture ? 'Soil Moisture is required' : ''} ${!temperature ? 'Temperature is required' : ''} ${!humidity ? 'Humidity is required' : ''}`);
    }

    const messageContent = `Today's weather report:
    Soil Moisture: ${soilMoisture}%
    Temperature: ${temperature}°C
    Humidity: ${humidity}%`;

    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    client.messages
    .create({
        body: messageContent,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917908720355'
    })
    .then(message => console.log(message.sid))

})





