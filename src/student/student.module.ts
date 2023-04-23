import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentsService } from "./student.service";
import { StudentsController } from "./student.controller";
import { TasksModule } from "../tasks/tasks.module";

@Module({
    imports:[TypeOrmModule.forFeature([Student]),TasksModule],
    providers:[StudentsService],
    controllers:[StudentsController],
})
export class StudentsModule{}