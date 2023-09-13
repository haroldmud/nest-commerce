import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './product.schema';

@Injectable() //we can inject the functionality of a file in another file
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>){}

  async create(name: string, price: number, description: string): Promise<ProductDocument> {
    const newProduct = new this.productModel({ name, price, description });
    return newProduct.save();
    //we perform save() whenever we're changing the mongoDB collection
  }

  async findAll(): Promise<ProductDocument[]> {
    return this.productModel.find();
    //find() here retrieves the data from the mongoDB collection
  }

  async findOne(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id)
  }

  async update(id: string, name: string, price: number, description: string): Promise<ProductDocument> {
    let updatedItem = await this.findOne(id);
    updatedItem.name = name ?? updatedItem.name;
    updatedItem.price = price ?? updatedItem.price;
    updatedItem.description = description ?? updatedItem.description;

    return updatedItem.save();
  }

  async remove(id: string): Promise<ProductDocument>{
    return ( await this.productModel.findByIdAndRemove(id))
  }
}
