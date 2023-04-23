import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateStudentType,
  GetOneParams,
  UpdateStudentType,
} from './types/student.type';
import { ErrorMessages } from 'src/constants';
import { TasksService } from 'src/tasks/tasks.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    private tasksService : TasksService
  ) {}

  async getAll() {
    return await this.studentRepository.find();
  }

  async create(data: CreateStudentType) {
    const { age, bio, firstName, lastName } = data;

    let student = new Student();

    student = {
      ...student,
      age,
      bio,
      firstName,
      lastName,
    };

    //you can use save method too.However save method runs 2 times (select and create). Insert method is efficent more than save method
    await this.studentRepository.insert(student);
  }

  async update(data: UpdateStudentType, params: GetOneParams) {
    const updatedStudent = await this.studentRepository.update(params.id, data);

    if (!updatedStudent.affected) {
      throw new NotFoundException(ErrorMessages.STUDENT.NOT_FOUND);
    }
  }

  async delete(params: GetOneParams) {
    const updatedStudent = await this.studentRepository.delete(params.id);

    if (!updatedStudent.affected) {
      throw new NotFoundException(ErrorMessages.STUDENT.NOT_FOUND);
    }
  }
}
