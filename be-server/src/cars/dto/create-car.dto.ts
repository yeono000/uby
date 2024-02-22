import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
    @ApiProperty({ description: '아이디' })
    id: number;

    @ApiProperty({ description: '위도 ' })
    lat: number;

    @ApiProperty({ description: '경도' })
    lng: number;
}
