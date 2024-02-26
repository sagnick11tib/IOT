// Desc: Sensor controller for handling sensor data related operations
const SensorData = require('../models/sensorData.model.js');
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const asyncHandler = require('../utils/asyncHandler.js');


const addSensorData = asyncHandler(async (req, res) =>{

    const {soilMoisture, temperature, humidity} = req.body;

    if(!soilMoisture || !temperature || !humidity){
        throw new ApiError(400, `${!soilMoisture ? 'Soil Moisture is required' : ''} ${!temperature ? 'Temperature is required' : ''} ${!humidity ? 'Humidity is required' : ''}`);
    }

    const sensorData = await SensorData.create({
        soilMoisture,
        temperature,
        humidity
    });

    if(!sensorData){
        throw new ApiError(500, 'Failed to add sensor data');
    }

    res
    .status(201)
    .json(new ApiResponse(201, sensorData, 'Sensor data added successfully'));

});


const getAllSensorData = asyncHandler(async (req, res) =>{

    const sensorData = await SensorData.find();

    if(!sensorData){
        throw new ApiError(404, 'No sensor data found');
    }

    res
    .status(200)
    .json(new ApiResponse(200, sensorData, 'Sensor data fetched successfully'));

});

const getSingleSensorData = asyncHandler(async (req, res) =>{

    const sensorData = await SensorData.findById(req.params.id);

    if(!sensorData){
        throw new ApiError(404, 'No sensor data found with this ID');
    }

    res
    .status(200)
    .json(new ApiResponse(200, sensorData, 'Sensor data fetched successfully'));

}); 

module.exports = {
    addSensorData,
    getAllSensorData,
    getSingleSensorData
};










/*

const getAllSensorData = asyncHandler(async (req, res) =>{

    // Filtering
    let queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
    let query = SensorData.find(JSON.parse(queryStr));

    // Sorting
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ');
        query = query.sort(sortBy);
    } else {
        query = query.sort('-createdAt');
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 100;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    const sensorData = await query;

    if(!sensorData){
        throw new ApiError(404, 'No sensor data found');
    }

    res
    .status(200)
    .json(new ApiResponse(200, sensorData, 'Sensor data fetched successfully'));

}); 

*/