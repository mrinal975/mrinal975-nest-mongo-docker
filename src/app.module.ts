import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { BreedsModule } from './breeds/breeds.module';
import { MemberModule } from './member/member.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      //Replace this line with the one Cluster > Connect > Connect your Application
      `mongodb://root:password123@mongodb-primary:27017`,
    ),
    BreedsModule,
    BlogModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
