import { Module } from '@nestjs/common';
import { WrittersService } from './writters.service';
import { WrittersController } from './writters.controller';

@Module({
  controllers: [WrittersController],
  providers: [WrittersService],
})
export class WrittersModule {}
