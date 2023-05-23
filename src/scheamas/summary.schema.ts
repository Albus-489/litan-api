import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IVolume } from './interfaces/IVolume';
import { ISummary } from './interfaces/ISummary';
export type SummaryDocument = Summary & Document;

@Schema()
export class Summary {
  @Prop()
  notes: string;
  @Prop({ type: Date, default: Date.now() })
  creationDate: Date;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
