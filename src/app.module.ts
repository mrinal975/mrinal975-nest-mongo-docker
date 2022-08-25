import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogController } from './blog/blog.controller';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      `mongodb://localhost:27017/test_db`,
    ),
  ],
  controllers: [AppController, BlogController],
  providers: [AppService],
})
export class AppModule {}
