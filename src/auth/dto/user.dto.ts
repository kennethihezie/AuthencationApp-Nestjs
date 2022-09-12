import { IsNotEmpty, IsNumber } from "class-validator";
import { Status } from "../model/user";

export class UserDto {
    @IsNotEmpty()
    firstName: string

    @IsNotEmpty()
    lastName: string

    @IsNotEmpty()
    age: number

    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    pass: string
}

