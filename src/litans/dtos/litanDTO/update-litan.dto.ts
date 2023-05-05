import { PartialType } from '@nestjs/mapped-types';
import { CreateLitanDto } from './create-litan.dto';

export class UpdateLitanDto extends PartialType(CreateLitanDto) {
  name: string;
  author: string;
  image?: string;
}
