import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LitansService } from './litans.service';
import { CreateLitanDto } from './dto/create-litan.dto';
import { UpdateLitanDto } from './dto/update-litan.dto';
import { IBook } from 'src/scheamas/interfaces/IBook';
import { DeleteVolumeDto } from './dto/delete-volume';
import { AddSummaryDto } from './dto/add-summary.dto';

@Controller('litans')
export class LitansController {
  constructor(private readonly litansService: LitansService) {}

  @Get()
  findAll() {
    return this.litansService.findAll();
  }

  @Post()
  create(@Body() createLitanDto: CreateLitanDto) {
    console.log(createLitanDto);

    return this.litansService.create(createLitanDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.litansService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLitanDto: UpdateLitanDto) {
    return this.litansService.update(id, updateLitanDto);
  }

  @Patch(':id/add-volume')
  addVolume(@Param('id') id: string, @Body() updateLitanDto: UpdateLitanDto) {
    return this.litansService.addVolume(id, updateLitanDto);
  }

  @Patch(':id/add-summary')
  addSummary(@Param('id') id: string, @Body() addSummaryDto: AddSummaryDto) {
    return this.litansService.addSummary(id, addSummaryDto);
  }

  @Delete(':id/delete-volume')
  deleteVolume(
    @Param('id') id: string,
    @Body() deleteVolumeDto: DeleteVolumeDto,
  ) {
    return this.litansService.removeVolume(id, deleteVolumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.litansService.remove(id);
  }
}
