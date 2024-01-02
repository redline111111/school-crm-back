import express, { Router } from "express";
import studentController from "../controllers/student.controller";

const router: Router = express.Router();

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);

router.post("/", studentController.createStudent);

router.put("/:id", studentController.updateStudent);

router.delete("/:id", studentController.deleteStudent);

export default router;
