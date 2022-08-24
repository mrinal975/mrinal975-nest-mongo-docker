import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop()
  member_name: string;

  @Prop()
  age: number;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  created_at: Date;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
