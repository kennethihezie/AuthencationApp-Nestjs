import { Body, Controller, Post } from '@nestjs/common';
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
}
