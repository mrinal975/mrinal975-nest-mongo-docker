import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('post')
  async getPost(@Res() res) {
    const posts = await this.blogService.getAll();
    return posts;
  }

  @Post('post')
  async addPost(@Res() res, @Body() createPostDTO: CreatePostDTO) {
    const newPost = await this.blogService.addPost(createPostDTO);
    return newPost;
  }

  @Get('post/:postID')
  async findPost(@Param('postID') postID) {
    const postData = await this.blogService.getPost(postID);
    return postData;
  }
}
