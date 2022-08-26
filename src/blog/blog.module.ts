import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogSchema } from './schema/blog.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'title', schema: BlogSchema }])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
