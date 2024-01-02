import { Sequelize } from "sequelize-typescript";
import { Student } from "../models/student.model";
import { Teacher } from "../models/teacher.model";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123",
  database: "school",
  models: [Student, Teacher],
});

export default sequelize;
