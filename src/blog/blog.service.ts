import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDTO } from './dto/create-post.dto';
import { Post } from './interface/post.interface';
@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getAll(): Promise<Post[]> {
    const post = await this.postModel.find().exec();
    return post;
  }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await new this.postModel(createPostDTO);
    return newPost.save();
  }

  async getPost(postID): Promise<Post> {
    const ediPost = await this.postModel.findById(postID);
    return ediPost;
  }

  async editPost(postID, createPostDto: CreatePostDTO): Promise<Post> {
    const ediPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDto,
      { new: true },
    );
    return ediPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedData = await this.postModel.findByIdAndRemove(postID);
    return deletedData;
  }
}
