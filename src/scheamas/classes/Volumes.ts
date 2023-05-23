import { ICharacter } from '../interfaces/ICharacter';
import { ILocation } from '../interfaces/ILocation';
import { ISummary } from '../interfaces/ISummary';
import { IVolume } from '../interfaces/IVolume';

export class Volume implements IVolume {
  constructor(name: string) {
    this.name = name;
    this.characters = [];
    this.locations = [];
    this.summary = [];
    this.length = 0;
    this.rate = 0;
  }

  name: string;
  summary: ISummary[];
  characters: ICharacter[];
  locations: ILocation[];
  rate: number;
  length: number;
}
