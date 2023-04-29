import { IBook } from './interfaces/IBook';
import { ICharacter } from './interfaces/ICharacter';
import { ISummary } from './interfaces/ISummary';
import { IVolume } from './interfaces/IVolume';
const nopreview = require('../images/nopreview.png');

export class Summary implements ISummary {
  constructor(notes: string) {
    this.notes = notes;
    this.creationDate = new Date();
  }
  notes: string;
  creationDate: Date;
}
