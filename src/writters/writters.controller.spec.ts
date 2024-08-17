import { Test, TestingModule } from '@nestjs/testing';
import { WrittersController } from './writters.controller';
import { WrittersService } from './writters.service';

describe('WrittersController', () => {
  let controller: WrittersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WrittersController],
      providers: [WrittersService],
    }).compile();

    controller = module.get<WrittersController>(WrittersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
