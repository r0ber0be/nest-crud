import { Module } from '@nestjs/common';
import { WrittersService } from './writters.service';
import { WrittersController } from './writters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Writter } from './entities/writter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Writter])],
  controllers: [WrittersController],
  providers: [WrittersService],
})
export class WrittersModule {}
