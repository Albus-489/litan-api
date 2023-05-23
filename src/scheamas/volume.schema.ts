import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Summary } from './summary.schema';
import mongoose from 'mongoose';
export type VolumeDocument = Volume & Document;

@Schema()
export class Volume {
  @Prop()
  name: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Summary' }],
    required: false,
  })
  summary: Summary[];
  @Prop()
  rate: number;
}

export const VolumeSchema = SchemaFactory.createForClass(Volume);
