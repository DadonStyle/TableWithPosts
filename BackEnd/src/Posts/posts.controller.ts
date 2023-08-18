import { Controller, Get, Delete, Query } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPostsById(
    @Query('userId') userId: string,
    @Query('pageSize') pageSize: string,
    @Query('pageCount') pageCount: string,
  ) {
    return this.postsService.getPostByUserId(userId, pageSize, pageCount);
  }

  @Delete()
  async remove(@Query('userId') userId: string, @Query('id') id: string) {
    await this.postsService.remove(+userId, +id);
  }
}
