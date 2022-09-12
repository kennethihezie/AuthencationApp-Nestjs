import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post_dto';
import { PostsRepository } from './model/posts_repository';
import { Timestamp } from "firebase/firestore"
import { Posts } from './model/posts';


@Injectable()
export class PostsService {
    constructor(private postRepository: PostsRepository){}

    async createPost(post: PostDto): Promise<Posts> {
        const { name, description, postImageUrl } = post
        const timeStamp = Timestamp.fromDate(new Date(this.postRepository.setTimeDate()))

        const userPost = {
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: timeStamp
        }
        const data = await this.postRepository.createPost(userPost)

        return {
            id: data.id,
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: timeStamp
        }
    }

    async getAllPost(): Promise<Posts[]>{
        const allPosts = await this.postRepository.getAllPosts()
        const posts: Posts[] = []

        allPosts.docs.flatMap( doc => {
            const id = doc.id
            const { name, description, postImageUrl, timeStamp } = doc.data().post
            
            const post = {
                id: id,
                name: name,
                description: description, 
                postImageUrl: postImageUrl,
                timeStamp: timeStamp
            }
            posts.push(post)
        })

        return posts
    }

    async getPostById(id: string): Promise<Posts>{
        const doc = (await this.postRepository.getPostById(id)).data().post
        const { name, description, postImageUrl, timeStamp } = doc

        const post = {
            id: id,
            name: name,
            description: description, 
            postImageUrl: postImageUrl,
            timeStamp: timeStamp
        }

        return post
    }

    async updatePost(id: string, posts: PostDto){
        const { name, description, postImageUrl } = posts
        const timeStamp = Timestamp.fromDate(new Date(this.postRepository.setTimeDate()))
        const userPost = {
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: timeStamp
        }

        const post = await this.postRepository.updatePost(id, userPost)

        return {
            id: id,
            name: name,
            description: description,
            postImageUrl: postImageUrl,
            timeStamp: timeStamp
        }
    }

    async deletePost(id: string){
        const deletePost = await this.postRepository.deletePost(id)
        return {
            status: true,
            message: "deleted successfully",
        }
    }
}
