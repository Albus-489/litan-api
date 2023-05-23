import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSummaryDto } from 'src/litans/dtos/summariesDTO/add-summary.dto';
import { Summary, SummaryDocument } from 'src/scheamas/summary.schema';
import { Volume, VolumeDocument } from 'src/scheamas/volume.schema';
import { SummariesController } from './summary.controller';
import { UpdateSummaryDto } from 'src/litans/dtos/summariesDTO/update-summary.dto';

@Injectable()
export class SummariesService {
  constructor(
    @InjectModel(Summary.name) private summaryModel: Model<SummaryDocument>,
    @InjectModel(Volume.name) private volumeModel: Model<VolumeDocument>,
  ) {}

  create(addSummaryDto: AddSummaryDto) {
    return this.summaryModel.create(addSummaryDto).then((curentSummary) => {
      console.log('\n >> Created summary: \n', curentSummary);

      return this.volumeModel.findByIdAndUpdate(
        addSummaryDto.volumeID,
        { $push: { summary: curentSummary._id } },
        { new: true, useFindAndModify: false },
      );
    });
  }
  findAll() {
    return this.summaryModel.find().exec();
  }

  findById(id: string) {
    return this.summaryModel.findById(id);
  }
  update(id: string, updateSummaryDto: UpdateSummaryDto) {
    return this.summaryModel
      .findByIdAndUpdate(id, updateSummaryDto, {
        new: true,
        useFindAndModify: false,
      })
      .then((updatedSummary) => {
        // console.log('Updated summary:', updatedSummary);
        return updatedSummary;
      });
  }

  delete(id: string) {
    return this.summaryModel.findByIdAndDelete(id);
  }
}
