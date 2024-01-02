import { Request, Response } from "express";

const teacherController = {
  getAllTeachers: (req: Request, res: Response) => {
    res.json({ message: "Получены все учителя" });
  },
  getTeacherById: (req: Request, res: Response) => {
    res.json({ message: `Получен учитель с ID ${req.params.id}` });
  },
  createTeacher: (req: Request, res: Response) => {
    res.json({ message: "Учитель создан" });
  },
  updateTeacher: (req: Request, res: Response) => {
    res.json({ message: `Учитель с ID ${req.params.id} обновлен` });
  },
  deleteTeacher: (req: Request, res: Response) => {
    res.json({ message: `Учитель с ID ${req.params.id} удален` });
  },
};

export default teacherController;
