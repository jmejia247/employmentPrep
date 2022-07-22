const express = require('express');
const controller = express.Router();

const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('../utils/stringUtils');

controller.get('/capitalizeName/:name/', (request, response) => {
    try {
        // get name
        const name = request.params.name
        console.log(name)
        // get result of repeatNTimesWithSpace
        const capitalizedName = capitalizeFirstLetter(name);

        // send string response of result 
        response.send(capitalizedName);

    } catch (err){
        response.send("There was an error.")
    }
})

controller.get('/:name/:times', (request, response) => {
    try {

        // get name
        const name = request.params.name

        // get times
        const times = request.params.times

        // get result of repeatNTimesWithSpace
        const repeatedNames = repeatNTimesWithSpace(name, times);

        // send string response of result 
        response.send(repeatedNames);

    } catch (err){
        response.send("There was an error.")
    }
})



module.exports = controller;