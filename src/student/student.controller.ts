import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import {AddStudentDto} from './dto/addStudent.dto';
import {StudentEntity} from './entities/student.entity';


@Controller('student')
export class StudentController {

    constructor(private StudentService:StudentService)
    {}

    @Post()
    async addStudent(
        @Body() addStudentDto:AddStudentDto
    ): Promise<StudentEntity>{
        return await this.StudentService.addStudent(addStudentDto);
    }
}
