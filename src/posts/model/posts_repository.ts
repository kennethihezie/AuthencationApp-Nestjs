import { Injectable } from "@nestjs/common";
import { FireStoreHelper } from "src/firebase/firestore_helper";
import { PostDto } from "../dto/post_dto";
import { DocumentReference, DocumentData, QuerySnapshot, DocumentSnapshot } from "firebase/firestore"
import { Posts } from "./posts";

@Injectable()
export class PostsRepository{
   constructor(private firestoreHelper: FireStoreHelper){}

   async createPost(post: PostDto): Promise<DocumentReference>{
       return await this.firestoreHelper.createPost(post)
   }

   async getAllPosts(): Promise<QuerySnapshot<DocumentData>>{
      return await this.firestoreHelper.getAllPosts()
   }

   async getPostById(id: string): Promise<DocumentSnapshot<DocumentData>>{
      return await this.firestoreHelper.getPostById(id)
   }

   async updatePost(id: string, postDto: PostDto): Promise<void>{
     return this.firestoreHelper.updatePost(id, postDto)
   }

   async deletePost(id: string): Promise<void>{
      return await this.firestoreHelper.deletePost(id)
   }


    setTimeDate(): string{
       var dataObj = new Date()
       var date = ("0" + dataObj.getDate()).slice(-2)
       var month = ("0" + (dataObj.getMonth() + 1)).slice(-2)
       var year = dataObj.getFullYear()
       var hours = dataObj.getHours()
       var minutes = dataObj.getMinutes()
       var seconds = dataObj.getSeconds()
      return (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    }
}