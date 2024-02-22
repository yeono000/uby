import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  
  constructor(
    @InjectRepository(Car)
    private tasksRepository: Repository<Car>,
  ) {}

  async create(createTaskDto: CreateCarDto): Promise<Car> {
    const newTask = this.tasksRepository.create(createTaskDto);
    await this.tasksRepository.save(newTask);
    return newTask;
  }

  async findAll(): Promise<Car[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    const task = await this.tasksRepository.findOne({ where : { id : id }});
    if (!task) {
      throw new Error(`Task with ID ${id} not found.`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateCarDto): Promise<Car> {
    const task = await this.findOne(id); // Reuse findOne to ensure the task exists
    const updatedTask = this.tasksRepository.merge(task, updateTaskDto);
    await this.tasksRepository.save(updatedTask);
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Task with ID ${id} not found.`);
    }
  }
}
