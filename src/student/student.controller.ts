import {
  Controller,
  Get,
  HttpCode,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { StudentsService } from './student.service';
import { CreateStudentDto } from './dto/create.dto';
import { UpdateStudentDto } from './dto/update.dto';
import { GetOneParams } from './types/student.type';

@Controller('api/v1/students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  @HttpCode(200)
  async getAll() {
    return await this.studentsService.getAll();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createDto: CreateStudentDto) {
    return await this.studentsService.create(createDto);
  }

  @Put()
  @HttpCode(200)
  async update(
    @Body() updateDto: UpdateStudentDto,
    @Param() params: GetOneParams,
  ) {
    return await this.studentsService.update(updateDto, params);
  }

  @Delete()
  @HttpCode(200)
  async delete(@Param() params: GetOneParams) {
    return await this.studentsService.delete(params);
  }
}
