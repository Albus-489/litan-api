import { ISummary } from 'src/scheamas/interfaces/ISummary';
import { IVolume } from 'src/scheamas/interfaces/IVolume';

export class CreateLitanDto {
  name: string;
  author: string;
  image: string;
  volumes: IVolume[];
  summary: ISummary[];
  rate: number;
}
