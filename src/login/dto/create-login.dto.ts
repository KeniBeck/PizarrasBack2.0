import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLoginDto {
    @ApiProperty({example: 11234})
    user: number;

    @ApiProperty({example: '12345678'})
    @IsString()
    password: string;
}