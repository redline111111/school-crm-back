import { Table, Column, Model } from "sequelize-typescript";

@Table
export class Subject extends Model {
  @Column
  name!: string;
}
