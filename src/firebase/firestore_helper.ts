import { Injectable } from "@nestjs/common"
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentReference, DocumentSnapshot, getDoc, getDocs, getFirestore, QuerySnapshot, updateDoc } from "firebase/firestore"
import { PostDto } from "src/posts/dto/post_dto"

@Injectable()
export class FireStoreHelper{
    private db = getFirestore()

    async createPost(post: PostDto): Promise<DocumentReference> {
        return await addDoc(collection(this.db, "posts"), post)
    }

    async getAllPosts(): Promise<QuerySnapshot<DocumentData>>{
        return await getDocs(collection(this.db, "posts"))
    }

    async getPostById(id: string): Promise<DocumentSnapshot<DocumentData>>{
        return await getDoc(doc(this.db, 'posts', id))
    }

    async updatePost(id: string, postDto: PostDto): Promise<void>{
        return updateDoc(doc(this.db, 'posts', id), { postDto })
    }

    async deletePost(id: string): Promise<void>{
        return await deleteDoc(doc(this.db, 'posts', id))
    }
}
