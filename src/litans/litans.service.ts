import { Injectable } from '@nestjs/common';
import { CreateLitanDto } from './dto/create-litan.dto';
import { UpdateLitanDto } from './dto/update-litan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Litan, LitanDocument } from 'src/scheamas/litans.schema';
import { Model } from 'mongoose';

@Injectable()
export class LitansService {
  constructor(
    @InjectModel(Litan.name) private litanModel: Model<LitanDocument>,
  ) {}

  create(createLitanDto: CreateLitanDto) {
    return this.litanModel.create(createLitanDto);
  }

  findAll() {
    return this.litanModel.find().exec();
  }

  findOne(id: string) {
    return this.litanModel.findById(id).exec();
  }

  update(id: string, updateLitanDto: UpdateLitanDto) {
    try {
      return this.litanModel.updateOne({ _id: id }, updateLitanDto).exec();
    } catch (error) {
      return error;
    }
  }

  remove(_id: string) {
    return this.litanModel.deleteOne({ _id });
  }
}
