import * as mongoose from 'mongoose';

const Column = {
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String,
};
export const BlogSchema = new mongoose.Schema({ Column });
