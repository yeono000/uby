import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
    @ApiProperty({ description: '위도 ' })
    lat: number;

    @ApiProperty({ description: '경도' })
    lng: number;
}
