import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    jobrole: {type: String, required: true}
})

const studentModel = mongoose.model("student", studentSchema)

export default studentModel