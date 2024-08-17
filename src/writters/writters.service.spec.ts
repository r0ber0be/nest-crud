import { Test, TestingModule } from '@nestjs/testing';
import { WrittersService } from './writters.service';

describe('WrittersService', () => {
  let service: WrittersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WrittersService],
    }).compile();

    service = module.get<WrittersService>(WrittersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
