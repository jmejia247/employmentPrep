const express = require('express');
const controller = express.Router();

const studentData = require('../studentData.json');

const db = require('../db/dbConfig');
const { response } = require('express');

controller.get('/', async (request, response) => {

    let {limit=25, min, max} = request.query; 

    limit = Number(limit);
    
    let studentDataForDelivery = await db.any('SELECT * FROM students');
    
    studentDataForDelivery = studentDataForDelivery.slice(0, limit);

    response.json(studentDataForDelivery);

});


// write a route to get a student by their full name

// implement min and max ids for get students

// write a route to get the grade average of a student by their id

// get all students sorted by their last name


// write a route that accepts a student id as part of the path
// returning an object (JSON), representing the student with that id

controller.get('/:id', async (request, response) => {
    try {
        const studentId = request.params.id;
        
        if(!/[0-9]/.test(studentId)){
            response.send('Student id must be a number.')
            return;
        }
        
        const singleStudent = await db.oneOrNone('SELECT * FROM students WHERE id = $1', [studentId]);
        
        if(singleStudent){
            response.json(singleStudent);
        } else {
            response.send('Student not found');
        }  
          
    } catch (err){
        response.status(500).send("An error occurred");
    }
})

controller.get('/:id/grades', async (req, res) => {

    try {  
        const studentId = req.params.id;

        const grades = await db.any('SELECT * FROM grades WHERE student_id = $1', [studentId]);

        grades.sort((a, b) => a.date - b.date);

        res.json(grades);
        
    } catch (err){
        res.status(500).send(err);
    }
})

controller.put('/:id', async (req, res) => {
    console.log('Update route up and running');

    try {
        console.log('test', req)
        //  The id helps db to know which students to update and body is the new info to be used
        const studentId = req.params.id;

        const { firstName, lastName, company, skill, pic, city, email } = req.body;
        // const updatedStudent = await db.one('SELECT * FROM students WHERE id = $1', [studentId]);
        
        const updatedStudent = await db.one('UPDATE students SET firstName=$1, lastName=$2, company=$3, skill=$4, pic=$5, city=$6, email=$7 WHERE id=$8 RETURNING *', [firstName, lastName, company, skill, pic, city, email, studentId]);

        console.log(updatedStudent)
        res.status(200).json({success: true, payload: updatedStudent});
    } catch (err) {
        console.log('test2')
        res.status(500).send(err);
    }

});


// {
//     "id": 2,
//     "firstname": "Laurens",
//     "lastname": "Romanet",
//     "company": "Skalith",
//     "skill": "Employee Handbooks",
//     "pic": "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg",
//     "city": "Krajan",
//     "email": "bskitt3@aboutads.info"
// }



module.exports = controller;