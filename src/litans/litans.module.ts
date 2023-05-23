import { Module } from '@nestjs/common';
// import { LitansService } from './controllers/litan/litans.service';
// import { LitansController } from './controllers/litan/litans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Litan, LitanSchema } from 'src/scheamas/litans.schema';
import { Volume, VolumeSchema } from 'src/scheamas/volume.schema';
import { Summary, SummarySchema } from 'src/scheamas/summary.schema';
import { VolumesController } from './controllers/volume/volume.controller';
import { VolumesService } from './controllers/volume/volume.service';
import { SummariesController } from './controllers/summary/summary.controller';
import { SummariesService } from './controllers/summary/summary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      // { name: Litan.name, schema: LitanSchema },
      { name: Volume.name, schema: VolumeSchema },
      { name: Summary.name, schema: SummarySchema },
    ]),
  ],
  controllers: [VolumesController, SummariesController],
  providers: [VolumesService, SummariesService],
})
export class LitansModule {}
