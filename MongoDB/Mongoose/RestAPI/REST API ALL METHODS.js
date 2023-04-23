//0

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


require("./db/connection")
const Student = require("./models/student")


app.use(express.json())


//0
//Create a new Student 
/* USING PROMISE
app.post("/students", (req, res) => {

    //4
    console.log(req.body)
    const user = new Student(req.body)


    //5 send data to mongo db
    user.save().then( () => {
        res.status(201).send(user);
    }).catch( (err) => {
        res.status(400).send(err);
    })

})

*/

//USING ASYNC AWAIT

app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
})

//6  read the data of registered Students
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    }
    catch (err) {
        res.status(400).send(err);
    }
})


/* //7  get the individual Student data using id 

app.get("/students/:id", async (req, res) => {
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
}) */

/* //7   get the individual Student data using name
app.get("/students/:name", async (req, res) => {
    try {
        const name = req.params.name.trim();
        console.log("Searching for student with name:", name);
        const studentData = await Student.findOne({ name });
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.status(200).send(studentData);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});
*/

/* // 8 Handling Update Request in REST API

app.put("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id.trim();
        const updates = { name: "Anuj jha" };
        const options = { new: true }; // Return the updated document
        const updatedStudent = await Student.findByIdAndUpdate(_id, updates, options);
        if (!updatedStudent) {
        return res.status(404).send();
        }
        res.status(200).send(updatedStudent);
    } catch (err) {
        res.status(500).send(err);
    }
    });
 */

// 8 Handling Update Request in REST API

/* app.patch("/students/:id", async (req, res) => {
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

 */



// 9 Handling DELETE Request in REST API

app.delete("/students/:id" , async( req,res) => {
    try {
        const _id = req.params.id;
const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(404).send();
        }
        res.status(200).send(deleteStudent);
    } catch (err) {
        res.status(500).send(err);
    }
});



app.listen(port, () => {
    console.log(`Server is listening on ${port} `)
})



//  You DO NOT NEED express.json() and express.urlencoded()
//  for GET Requests or DELETE Requests. We only need it for post and put req.

// express.json() is a method inbuilt in express to recognize the
// incoming  Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app.use(express.json());