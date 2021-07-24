import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';


@Entity('student')
export class StudentEntity {

  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  Username: string;

  
  @Column()
  email: string;

  
  @Column()
  phone: number;

  
  @Column()
  address: string;

  
  @Column()
  School: string;

  
  @Column()
  password: string;
}