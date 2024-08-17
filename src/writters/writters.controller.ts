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
} from '@nestjs/common';
import { WrittersService } from './writters.service';
import { CreateWritterDto } from './dto/create-writter.dto';
import { UpdateWritterDto } from './dto/update-writter.dto';

@Controller('writters')
export class WrittersController {
  constructor(private readonly writtersService: WrittersService) {}

  @Post()
  create(@Body() createWritterDto: CreateWritterDto) {
    return this.writtersService.create(createWritterDto);
  }

  @Get()
  findAll() {
    return this.writtersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const writter = await this.writtersService.findOne(id);
    if (!writter) throw new NotFoundException();
    return writter;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWritterDto: UpdateWritterDto,
  ) {
    const writter = await this.writtersService.update(id, updateWritterDto);
    if (!writter) throw new NotFoundException();
    return writter;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const writter = await this.writtersService.remove(id);
    if (!writter) throw new NotFoundException();
  }
}
