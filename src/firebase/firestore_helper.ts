import { Injectable } from "@nestjs/common"
import { addDoc, collection, doc, DocumentData, DocumentReference, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore"
import { PostDto } from "src/posts/dto/post_dto"
import { Posts } from "src/posts/model/posts"

@Injectable()
export class FireStoreHelper{
    private db = getFirestore()

    async createPost(post: PostDto): Promise<DocumentReference> {
        return await addDoc(collection(this.db, "posts"), post)
    }

    async getAllPosts(): Promise<QuerySnapshot<DocumentData>>{
        return await getDocs(collection(this.db, "posts"))
    }
}
