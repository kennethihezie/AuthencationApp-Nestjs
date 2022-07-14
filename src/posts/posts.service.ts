import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post_dto';
import { PostsRepository } from './model/posts_repository';
import { DocumentReference, Timestamp } from "firebase/firestore"
import { Posts } from './model/posts';


@Injectable()
export class PostsService {
    constructor(private postRepository: PostsRepository){}

    async createPost(post: PostDto): Promise<Posts> {
        const { name, description, postImageUrl } = post
        const userPost = {
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: Timestamp.fromDate(new Date(this.postRepository.setTimeDate()))
        }
        const data = await this.postRepository.createPost(userPost)

        return {
            id: data.id,
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: Timestamp.fromDate(new Date(this.postRepository.setTimeDate()))
        }
    }
}
