import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberController } from './member.controller';
import { MemberSchema } from './member.model';
import { MemberService } from './member.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'members', schema: MemberSchema }]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
