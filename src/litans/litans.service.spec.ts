import { Test, TestingModule } from '@nestjs/testing';
import { LitansService } from './litans.service';

describe('LitansService', () => {
  let service: LitansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LitansService],
    }).compile();

    service = module.get<LitansService>(LitansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
