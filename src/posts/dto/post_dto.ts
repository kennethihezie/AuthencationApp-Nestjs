import { IsNotEmpty, IsOptional } from "class-validator";

export class PostDto{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    description: string

    @IsOptional()
    postImageUrl: string
}