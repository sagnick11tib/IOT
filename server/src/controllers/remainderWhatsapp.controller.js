const RemainderWhatsapp  = require("../models/remainderWhatsApp.model.js");
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const asyncHandler = require('../utils/asyncHandler.js');


const getAllRemainderWhatsapp = asyncHandler(async (req, res) =>{
    const remainder = await RemainderWhatsapp.find();
    if(!remainder){
        throw new ApiError(404, 'No remainder found');
    }
    res
    .status(200)
    .json(new ApiResponse(200, remainder, 'Remainder fetched successfully'));

});

const addRemainderWhatsapp = asyncHandler(async (req, res) =>{
    const {remainderMsg, remindAt} = req.body;
    if(!remainderMsg || !remindAt){
        throw new ApiError(400, `${!remainderMsg ? 'Remainder message is required' : ''} ${!remindAt ? 'Remind-At is required' : ''}`);
    }
    const remainder = await RemainderWhatsapp.create({
        remainderMsg,
        remindAt,
        isReminded:false
    });
    if(!remainder){
        throw new ApiError(500, 'Failed to add remainder');
    }
    res
    .status(201)
    .json(new ApiResponse(201, remainder, 'Remainder added successfully'));
});

const deleteRemainder = asyncHandler(async (req, res) =>{
    const deleteRemainder = await RemainderWhatsapp.findByIdAndDelete(req.params.id);
    if(!deleteRemainder){
        throw new ApiError(404, 'No remainder found with this ID');
    }
    res
    .status(200)
    .json(new ApiResponse(200, deleteRemainder, 'Remainder deleted successfully'));

});






module.exports = {
    getAllRemainderWhatsapp,
    addRemainderWhatsapp,
    deleteRemainder
};


