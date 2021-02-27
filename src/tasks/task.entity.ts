import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

//Basically schema postgres uses for database tables
@Entity()
export class Task extends BaseEntity {
  //Tells postgres it is primary key and should be auto generated and incremented
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
