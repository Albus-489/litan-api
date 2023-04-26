import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IVolume } from './interfaces/IVolume';
import { ISummary } from './interfaces/ISummary';
export type LitanDocument = Litan & Document;

@Schema()
export class Litan {
  @Prop()
  name: string;
  @Prop()
  author: string;
  @Prop()
  image: string;
  @Prop()
  volumes: IVolume[];
  @Prop()
  summary: ISummary[];
  @Prop()
  rate: number;
}

export const LitanSchema = SchemaFactory.createForClass(Litan);
