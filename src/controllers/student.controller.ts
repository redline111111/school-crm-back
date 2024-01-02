import { Request, Response } from "express";

const studentController = {
  getAllStudents: (req: Request, res: Response) => {
    res.json({ message: "Получены все ученики" });
  },
  getStudentById: (req: Request, res: Response) => {
    res.json({ message: `Получен ученик с ID ${req.params.id}` });
  },
  createStudent: (req: Request, res: Response) => {
    res.json({ message: "Ученик создан" });
  },
  updateStudent: (req: Request, res: Response) => {
    res.json({ message: `Ученик с ID ${req.params.id} обновлен` });
  },
  deleteStudent: (req: Request, res: Response) => {
    res.json({ message: `Ученик с ID ${req.params.id} удален` });
  },
};

export default studentController;
