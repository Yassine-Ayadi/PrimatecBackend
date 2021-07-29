import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/student.entity';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Global
@Module({
  imports: [
    TypeOrmModule.forFeature([StudentEntity]),
  ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
