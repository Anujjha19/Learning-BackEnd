/* // Express Router in RESTful API
a.   Create a New Router
const router = new express.Router();

b.   define a router
router.get('/thapa' , ( req , res) => {
    res.send("Hello Router")
})

c.    we need to register our router
app.use(router);     
 */

const express = require('express');
const router = new express.Router();
const Student = require("../models/student")


router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
})


router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    }
    catch (err) {
        res.status(400).send(err);
    }
})


router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id.trim();
        const studentData = await Student.findById(_id);
        if (!studentData) {
            return res.status(404).send();
        }
        else {
            res.status(200).send(studentData);
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
})


router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id.trim();
        const updatedStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if (!updatedStudent) {
            return res.status(404).send();
        }
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.status(200).send(deleteStudent);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router