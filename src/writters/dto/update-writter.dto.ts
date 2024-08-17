import { PartialType } from '@nestjs/mapped-types';
import { CreateWritterDto } from './create-writter.dto';

export class UpdateWritterDto extends PartialType(CreateWritterDto) {}
