import express, { Router } from "express";
import teacherController from "../controllers/teacher.controller";

const router: Router = express.Router();

router.get("/", teacherController.getAllTeachers);
router.get("/:id", teacherController.getTeacherById);

router.post("/", teacherController.createTeacher);

router.put("/:id", teacherController.updateTeacher);

router.delete("/:id", teacherController.deleteTeacher);

export default router;
