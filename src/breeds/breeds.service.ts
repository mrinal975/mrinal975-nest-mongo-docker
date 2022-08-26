import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Breed, BreedDocument } from 'src/schemas/breed.schemas';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';

@Injectable()
export class BreedsService {
  constructor(@InjectModel(Breed.name) private breedModel:Model<BreedDocument>){}

  async create(createBreedDto: CreateBreedDto) {
    const createBreed = await new this.breedModel(createBreedDto);
    return createBreed.save();
  }

  async findAll():Promise<Breed[]> {
    return  await this.breedModel.find().exec();
  }
  async findOne(id: number) {
    return `This action returns a #${id} breed`;
  }

  async update(id: number, updateBreedDto: UpdateBreedDto) {
    return `This action updates a #${id} breed`;
  }

  async remove(id: number) {
    return `This action removes a #${id} breed`;
  }
}
