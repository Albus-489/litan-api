import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AddSummaryDto } from 'src/litans/dtos/summariesDTO/add-summary.dto';
import { SummariesService } from './summary.service';

@Controller('summaries')
export class SummariesController {
  constructor(private readonly summaryService: SummariesService) {}

  @Patch('/add-summary')
  create(@Body() addSummaryDto: AddSummaryDto) {
    console.log(addSummaryDto);

    return this.summaryService.create(addSummaryDto);
  }

  @Get()
  findAll() {
    return this.summaryService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.summaryService.findById(id);
  }

  @Patch(':id/update-summary')
  update(@Param('id') id: string, @Body() addSummaryDto: AddSummaryDto) {
    return this.summaryService.update(id, addSummaryDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.summaryService.delete(id);
  }
}
