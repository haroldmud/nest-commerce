import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document 
// with this the id will be auto-generated

@Schema()
export class Product{
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop()
  description?: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
