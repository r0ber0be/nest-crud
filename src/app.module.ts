import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WrittersModule } from './writters/writters.module';

@Module({
  imports: [WrittersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
