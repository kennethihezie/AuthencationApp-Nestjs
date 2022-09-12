import { Timestamp } from "firebase/firestore";

export interface Posts{
    id: string
    name: string
    description: string
    postImageUrl: string
    timeStamp: Timestamp
}