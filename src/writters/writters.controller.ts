import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
  findOne(@Param('id') id: string) {
    return this.writtersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWritterDto: UpdateWritterDto) {
    return this.writtersService.update(+id, updateWritterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.writtersService.remove(+id);
  }
}
