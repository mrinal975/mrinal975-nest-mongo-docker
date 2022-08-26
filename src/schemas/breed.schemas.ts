import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BreedDocument = Breed & Document;

@Schema()
export class Breed{
    @Prop({required:true})
    name: string;

    @Prop({required:true})
    description:string
}

export const BreedSchema = SchemaFactory.createForClass(Breed);