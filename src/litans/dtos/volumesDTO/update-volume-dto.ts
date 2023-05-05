import { ICharacter } from 'src/scheamas/interfaces/ICharacter';
import { ILocation } from 'src/scheamas/interfaces/ILocation';
import { ISummary } from 'src/scheamas/interfaces/ISummary';

export class updateVolumeDto {
  name: string;
  rate?: number;
  length?: number;
}
