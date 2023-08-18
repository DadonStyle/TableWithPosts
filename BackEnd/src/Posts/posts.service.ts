import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { EntityManager, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { handlePagination } from 'src/utill/helper';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAllPosts(userId: number) {
    return this.postsRepository.findBy({ userId });
  }

  async getPostByUserId(userId: string, pageSize: string, pageCount: string) {
    const posts = await this.findAllPosts(+userId);
    if (posts?.length > 0) {
      return {
        posts: handlePagination(+pageSize, +pageCount, posts),
        totalPosts: posts.length,
      };
    }
    try {
      const res = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );

      if (res?.data.length < 1) return [];
      const postEntities = res?.data.map(
        (item: CreatePostDto) => new Post(item),
      );
      await this.entityManager.save(postEntities);
      return {
        posts: handlePagination(+pageSize, +pageCount, postEntities),
        totalPosts: posts.length,
      };
    } catch (err) {
      console.warn(err);
    }
  }

  async remove(userId: number, id: number) {
    await this.postsRepository.delete({ userId: userId, id: id });
  }
}
