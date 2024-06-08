import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){}

    // creating routes get post, delete
    @Get()
    findAll(){
        return this.tasksService.findAll();
    }
    
    // /tasks/100
    @Get(':id')
    findOne(){
        return 'Get one Task'
    }

    @Post()
    create(@Body() body: CreateTaskDto){
        return this.tasksService.create(body)
    }
    
    @Put()
    update(){
        return 'update task'
    }

}
