import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table
export class User extends Model {
  @Column
  first_name!: string;

  @Column
  second_name!: string;

  @Column(DataType.SMALLINT)
  sex!: number;

  @Column
  password!: string;

  @Column(DataType.STRING)
  icon!: string | null;

  @Column
  created_at!: Date;
}
