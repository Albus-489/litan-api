import { Injectable } from '@nestjs/common';
import { CreateLitanDto } from './dto/create-litan.dto';
import { UpdateLitanDto } from './dto/update-litan.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Litan, LitanDocument } from 'src/scheamas/litans.schema';
import { Model } from 'mongoose';
import { Volume } from 'src/scheamas/Volumes';
import { AddVolumeDto } from './dto/add-volume.dto';
import { DeleteVolumeDto } from './dto/delete-volume';
import { AddSummaryDto } from './dto/add-summary.dto';
import { Summary } from 'src/scheamas/Summaries';

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

  async addVolume(id: string, addVolumeDto: AddVolumeDto) {
    try {
      const litan = await this.litanModel.findById(id).exec();
      if (!litan) {
        throw new Error('Litan not found');
      }
      const newVolume = new Volume(addVolumeDto.name);
      litan.volumes.push(newVolume);
      const updatedLitan = await litan.save();

      return updatedLitan;
    } catch (error) {
      return error;
    }
  }
  async addSummary(id: string, addSummaryDto: AddSummaryDto) {
    try {
      const updatedLitan = await this.litanModel.findByIdAndUpdate(
        id,
        {
          $push: {
            [`volumes.${addSummaryDto.index}.summary`]: {
              notes: addSummaryDto.text,
              creationDate: new Date(),
            },
          },
        },
        { new: true },
      );

      if (!updatedLitan) {
        throw new Error('Litan not found');
      }

      return updatedLitan;
    } catch (error) {
      return error;
    }
  }

  async removeVolume(id: string, deleteVolumeDto: DeleteVolumeDto) {
    try {
      const litan = await this.litanModel.findById(id).exec();
      if (!litan) {
        throw new Error('Book not found');
      }

      litan.volumes.splice(deleteVolumeDto.volumeIndex, 1);
      const updatedLitan = await litan.save();

      return updatedLitan;
    } catch (error) {
      return error;
    }
  }

  remove(_id: string) {
    return this.litanModel.deleteOne({ _id });
  }
}
