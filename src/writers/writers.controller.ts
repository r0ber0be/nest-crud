import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
  Header,
} from '@nestjs/common';
import { WritersService } from './writers.service';
import { CreateWriterDto } from './dto/create-writer.dto';
import { UpdateWriterDto } from './dto/update-writer.dto';

@Controller({ path: 'writers', host: 'localhost' })
export class WritersController {
  constructor(private readonly writersService: WritersService) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createWriterDto: CreateWriterDto) {
    return this.writersService.create(createWriterDto);
  }

  @Get()
  findAll() {
    return this.writersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const writer = await this.writersService.findOne(id);
    if (!writer) throw new NotFoundException();
    return writer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWriterDto: UpdateWriterDto,
  ) {
    const writer = await this.writersService.update(id, updateWriterDto);
    if (!writer) throw new NotFoundException();
    return writer;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const writer = await this.writersService.remove(id);
    if (!writer) throw new NotFoundException();
  }
}
