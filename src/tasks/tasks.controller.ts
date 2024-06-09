import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    findOne(@Param('id') id: string){
        return this.tasksService.findOnde(id)
    }

    @Post()
    create(@Body() body: CreateTaskDto){
        return this.tasksService.create(body)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        // console.log(id)
        return this.tasksService.delete(id);
    }
    
    @Put('id')
    update(@Param('id') id: string, @Body() body:any){
        // console.log(id,body)
        return this.tasksService.update(id,body)
    }

}
