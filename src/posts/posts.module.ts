import { Module } from '@nestjs/common';
import { FireStoreHelper } from 'src/firebase/firestore_helper';
import { PostsRepository } from './model/posts_repository';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, FireStoreHelper, PostsRepository]
})
export class PostsModule {}
