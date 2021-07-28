import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
