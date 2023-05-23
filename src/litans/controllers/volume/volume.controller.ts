import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VolumesService } from './volume.service';
import { AddVolumeDto } from 'src/litans/dtos/volumesDTO/add-volume.dto';
import { updateVolumeDto } from 'src/litans/dtos/volumesDTO/update-volume-dto';

@Controller('volumes')
export class VolumesController {
  constructor(private readonly volumeService: VolumesService) {}

  // Create
  @Patch('/add-volume')
  create(@Body() addVolumeDto: AddVolumeDto) {
    console.log(addVolumeDto);

    return this.volumeService.create(addVolumeDto);
  }

  // Read
  @Get()
  findAll() {
    return this.volumeService.findAll();
  }

  @Get(':id')
  findWithPopulate(@Param('id') id: string) {
    return this.volumeService.findWithPopulate(id);
  }

  // Update
  @Patch(':id/update-volume')
  update(@Param('id') id: string, @Body() updateVolumeDto: updateVolumeDto) {
    return this.volumeService.updateVolume(id, updateVolumeDto);
  }

  // Delete
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.volumeService.delete(id);
  }
}
