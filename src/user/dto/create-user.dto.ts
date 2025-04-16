import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({example:"1"})
    @IsNumber()
    @Type(() => Number)
    id: number;

    @ApiProperty({example:"John"})
    @IsString()
    username: string;

    @ApiProperty({example:"********"})
    @IsString()
    password: string;
}
