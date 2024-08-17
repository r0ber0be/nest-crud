import { Injectable } from '@nestjs/common';
import { CreateWritterDto } from './dto/create-writter.dto';
import { UpdateWritterDto } from './dto/update-writter.dto';
import { Repository } from 'typeorm';
import { Writter } from './entities/writter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WrittersService {
  constructor(
    @InjectRepository(Writter)
    private readonly repository: Repository<Writter>,
  ) {}

  create(createWritterDto: CreateWritterDto) {
    const writter = this.repository.create(createWritterDto);
    return this.repository.save(writter);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updateWritterDto: UpdateWritterDto) {
    const writter = await this.repository.findOneBy({ id });
    if (!writter) return null;

    this.repository.merge(writter, updateWritterDto);
    return this.repository.save(writter);
  }

  async remove(id: string) {
    const writter = await this.repository.findOneBy({ id });
    if (!writter) return null;

    return this.repository.delete(id);
  }
}
