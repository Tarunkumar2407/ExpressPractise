import studentModel from "../model/studentModel.js"

class StudentController {
    static getAllDoc = async (req, res) => {
        try {
         const result = await studentModel.find()
         res.status(201).json(result)  
        } catch (error) {
            res.status(422).json({"status": "failed", "messages": "Error in getting data"})
            console.log(error)
        }
    }

    static getById = async (req, res) => {
        try {
            const result = await studentModel.findById(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            res.status(422).json({"status": "failed", "message": "Error in getting student by Id"})
            console.log(error)
        }
    }

    static createDoc = async (req, res)=> {
        const {name, email, age, jobrole} = req.body
        const student = await studentModel.findOne({email: email})
        if (student) {
            res.status(422).json({"status": "failed", "message": "User already exit"})
        }else{
            if(name && email && age && jobrole){
               try {
                   const newStudent = await studentModel({
                    name: name,
                    email: email,
                    age: age,
                    jobrole: jobrole
                   })
                   await newStudent.save()
                   res.status(201).json(newStudent)
                   console.log(newStudent)
               } catch (error) {
                   res.status(422).json({"status": "failed", "message": "User Registration failed"})
               }
            }else{
               res.status(422).json({"status": "failed", "message": "All fields are required"})
            }
        }
    }
    
    static updateDoc = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.status(201).json(result)
        } catch (error) {
            res.status(422).json({"status": "failed", "message": "Error in updating student data"})
            console.log(error)
        }
        res.send("doc updated")
    }

    static deleteDoc = async (req, res) => {
        try {
            const result = await studentModel.findByIdAndDelete(req.params.id)
            res.status(201).json(result)
        } catch (error) {
            res.status(422).json({"status": "failed", "message": "Error in deleting user"})
            console.log(error)
        }
    }
}

export default StudentController