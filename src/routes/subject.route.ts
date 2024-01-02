import express, { Router } from "express";
import SubjectController from "../controllers/subject.controller";

const router: Router = express.Router();

router.get("/", SubjectController.getAllSubjects);
router.get("/:id", SubjectController.getSubjectById);
router.post("/", SubjectController.createSubject);
router.put("/:id", SubjectController.updateSubject);
router.delete("/:id", SubjectController.deleteSubject);

export default router;
