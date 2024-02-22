import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @ApiProperty({ description: '위도 ' })
    lat: number;

    @ApiProperty({ description: '경도' })
    lng: number;
}
