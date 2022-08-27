import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Breed, BreedSchema } from 'src/schemas/breed.schemas';
import { BreedsController } from './breeds.controller';
import { BreedsService } from './breeds.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Breed.name, schema: BreedSchema }]),
  ],
  controllers: [BreedsController],
  providers: [BreedsService],
})
export class BreedsModule {}
