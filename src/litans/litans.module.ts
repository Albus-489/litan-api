import { Module } from '@nestjs/common';
import { LitansService } from './litans.service';
import { LitansController } from './litans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Litan, LitanSchema } from 'src/scheamas/litans.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Litan.name, schema: LitanSchema }]),
  ],
  controllers: [LitansController],
  providers: [LitansService],
})
export class LitansModule {}
