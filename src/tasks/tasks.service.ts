import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  @Cron('0 0 * * *', { name: 'Clean student database each end of day' })
  async handleCron() {
    //clear method truncates to interested table.
    await this.studentRepository.clear()
     this.logger.debug('Cleaned the student table !!!!');
  }
}
