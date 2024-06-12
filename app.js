const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const patient = require("./models/patients")
const { patientModel } = require("./models/patients")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aswinkrishnam16:aswinkrishnam@cluster0.2iu51vz.mongodb.net/patientapp?retryWrites=true&w=majority&appName=Cluster0")



app.post("/", (req, res) => {
    let input = req.body
    let patient = new patientModel(input)
    patient.save()
    console.log(patient)
    res.json({ "status": "success" })
})

app.post("/viewall", (req, res) => {
    patientModel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})

app.post("/search", (req, res) => {
    let input=req.body
    patientModel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.listen(8080, () => {
    console.log("server started")
})