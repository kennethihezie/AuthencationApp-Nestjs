import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostDto } from './dto/post_dto';
import { Posts } from './model/posts';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService){}

    @Post()
    async createPost(@Body() post: PostDto): Promise<Posts>{
        return await this.postService.createPost(post)
    }

    @Get()
    async getAllPosts(){
        return this.postService.getAllPost()
    }

    @Get('/:id')
    async getPostById(@Param('id') id: string){
        return this.postService.getPostById(id)
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    async updatePost(@Param('id') id: string, @Body() postDto: PostDto){
        return this.postService.updatePost(id, postDto)
    }

    @Delete('/:id')
    async deletePost(@Param('id') id: string){
        return this.postService.deletePost(id)
    }
}

//all endpoints is working
