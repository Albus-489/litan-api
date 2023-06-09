import { ICharacter } from './ICharacter';
import { ISummary } from './ISummary';
import { IVolume } from './IVolume';

export interface IBook {
  id?: string;
  name?: string;
  author?: string;
  image?: string;
  volumes?: IVolume[];
  summary?: ISummary[];
  rate?: number;
}
