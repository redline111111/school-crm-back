import express from "express";
import bodyParser from "body-parser";
import studentRoutes from "./routes/student.route";
import teacherRoutes from "./routes/teacher.route";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
