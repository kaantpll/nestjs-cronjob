import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  providers: [TasksService],
  exports : [TasksService]
})
export class TasksModule {}