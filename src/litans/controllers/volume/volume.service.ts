import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddVolumeDto } from 'src/litans/dtos/volumesDTO/add-volume.dto';
import { DeleteVolumeDto } from 'src/litans/dtos/volumesDTO/delete-volume';
import { Summary, SummaryDocument } from 'src/scheamas/summary.schema';
import { Volume, VolumeDocument } from 'src/scheamas/volume.schema';
import { updateVolumeDto } from 'src/litans/dtos/volumesDTO/update-volume-dto';

@Injectable()
export class VolumesService {
  constructor(
    @InjectModel(Volume.name) private volumeModel: Model<VolumeDocument>,
    @InjectModel(Summary.name) private summaryModel: Model<SummaryDocument>,
  ) {}

  create(createVolumeDto: AddVolumeDto) {
    return this.volumeModel.create(createVolumeDto);
  }

  findWithPopulate(id: string) {
    return this.volumeModel.findById(id).populate('summary');
  }

  findAll() {
    return this.volumeModel.find().exec();
  }

  updateVolume(volumeID: string, updateVolumeDto: updateVolumeDto) {
    return this.volumeModel
      .findByIdAndUpdate(volumeID, updateVolumeDto, {
        new: true,
        useFindAndModify: false,
      })
      .then((updatedVolume) => {
        console.log('Updated volume:', updatedVolume);
        return updatedVolume;
      });
  }

  delete(volumeID: string) {
    return this.volumeModel
      .findByIdAndDelete(volumeID)
      .then((deletedVolume) => {
        const summaryIDs = deletedVolume.summary;
        return this.summaryModel
          .deleteMany({ _id: { $in: summaryIDs } })
          .then(() => {
            const response = `Deleted volume with ID: ${volumeID} and its associated summaries.`;
            console.log(response);
            return { response: response };
          });
      });
  }
}
