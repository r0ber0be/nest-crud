import { Injectable } from '@nestjs/common';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';
import { Repository } from 'typeorm';
import { Writer } from './entities/writer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WritersService {
  constructor(
    @InjectRepository(Writer)
    private readonly repository: Repository<Writer>,
  ) {}

  create(createWriterDto: CreateWriterDto) {
    const writer = this.repository.create(createWriterDto);
    return this.repository.save(writer);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updateWriterDto: UpdateWriterDto) {
    const writer = await this.repository.findOneBy({ id });
    if (!writer) return null;

    this.repository.merge(writer, updateWriterDto);
    return this.repository.save(writer);
  }

  async remove(id: string) {
    const writer = await this.repository.findOneBy({ id });
    if (!writer) return null;

    return this.repository.delete(id);
  }
}
