import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { EntityManager, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(CreatePostDto: CreatePostDto) {
    const item = new Post(CreatePostDto);
    await this.entityManager.save(item);
  }

  async findAll() {
    return this.postsRepository.find();
  }

  async findOne(id: number) {
    return this.postsRepository.findOneBy({ id });
  }

  async update(id: number, UpdatePostDto: UpdatePostDto) {
    const item = await this.postsRepository.findOneBy({ id });
    item.public = UpdatePostDto.public;
    await this.entityManager.save(item);
  }

  async remove(id: number) {
    return this.postsRepository.delete(id);
  }
}
