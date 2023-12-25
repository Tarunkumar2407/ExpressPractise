import express from "express"
import StudentController from "../controller/studentController.js"

const router = express.Router()

router.get('/getalldoc', StudentController.getAllDoc)
router.get('/getbyid/:id', StudentController.getById)
router.post('/createdoc', StudentController.createDoc)
router.patch('/updatedoc/:id', StudentController.updateDoc)
router.delete('/deletedoc/:id', StudentController.deleteDoc)

export default router