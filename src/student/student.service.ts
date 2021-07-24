import { Injectable } from '@nestjs/common';
import { AddStudentDto } from './dto/addStudent.dto';
import { StudentEntity } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    
    constructor(
        @InjectRepository(StudentEntity)
        private studentRepository: Repository<StudentEntity>,
      ) {
      }

    async addStudent(Student:AddStudentDto): Promise<StudentEntity> {
        const newStudent = this.studentRepository.create(Student);
        return await this.studentRepository.save(newStudent);
      }
}
