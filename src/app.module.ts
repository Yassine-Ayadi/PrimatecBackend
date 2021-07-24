import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule,
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',//process.env.DB_HOST,
      port: 3306, //parseInt(process.env.DB_PORT),
      username: 'root', //process.env.DB_USERNAME,
      password: '',// process.env.DB_PASSWORD,
      database: 'nest-student',//process.env.DB_NAME,
      entities: ["dist/**/**/*.entity{.ts,.js}"],
      synchronize: true,
    })
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
