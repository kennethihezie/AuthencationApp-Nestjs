import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
import { Status } from "../model/user";

export class FilterUsersDto{
    @IsOptional()
    @IsIn([Status.PENDING, Status.UNREGISTERED, Status.REGISTERED])
    status: Status

    @IsOptional()
    @IsNotEmpty()
    search: string
}