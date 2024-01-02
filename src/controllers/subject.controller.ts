import { Request, Response } from "express";
import { Subject } from "../models/subject.model";

const SubjectController = {
  getAllSubjects: async (req: Request, res: Response) => {
    try {
      const subjects = await Subject.findAll();
      res.json(subjects);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getSubjectById: async (req: Request, res: Response) => {
    try {
      const subject = await Subject.findByPk(req.params.id);
      if (!subject) {
        res.status(404).json({ error: "Subject not found" });
      } else {
        res.json(subject);
      }
    } catch (error) {
      console.error("Error fetching subject by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createSubject: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const subject = await Subject.create({ name });
      res.status(201).json(subject);
    } catch (error) {
      console.error("Error creating subject:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateSubject: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const [updatedRowsCount, updatedSubjects] = await Subject.update(
        { name },
        { where: { id: req.params.id }, returning: true }
      );

      if (updatedRowsCount === 0) {
        res.status(404).json({ error: "Subject not found" });
      } else {
        res.json(updatedSubjects[0]);
      }
    } catch (error) {
      console.error("Error updating subject:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteSubject: async (req: Request, res: Response) => {
    try {
      const deletedRowsCount = await Subject.destroy({
        where: { id: req.params.id },
      });

      if (deletedRowsCount === 0) {
        res.status(404).json({ error: "Subject not found" });
      } else {
        res.status(204).end();
      }
    } catch (error) {
      console.error("Error deleting subject:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

export default SubjectController;
