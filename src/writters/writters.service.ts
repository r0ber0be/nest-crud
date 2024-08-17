import { Injectable } from '@nestjs/common';
import { CreateWritterDto } from './dto/create-writter.dto';
import { UpdateWritterDto } from './dto/update-writter.dto';

@Injectable()
export class WrittersService {
  create(createWritterDto: CreateWritterDto) {
    return 'This action adds a new writter';
  }

  findAll() {
    return `This action returns all writters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} writter`;
  }

  update(id: number, updateWritterDto: UpdateWritterDto) {
    return `This action updates a #${id} writter`;
  }

  remove(id: number) {
    return `This action removes a #${id} writter`;
  }
}
