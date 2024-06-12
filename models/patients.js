const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {

        "pName": String,
        "dName": String,
        "age": String,
        "dob": String,
        "address": String,
        "gender": String,
        "bloodGroup": String,
        "bDate": String,
     
    }
)
let patientModel = mongoose.model("patients", schema);
module.exports = { patientModel }