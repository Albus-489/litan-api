import { Test, TestingModule } from '@nestjs/testing';
import { LitansController } from './litans.controller';
import { LitansService } from './litans.service';

describe('LitansController', () => {
  let controller: LitansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LitansController],
      providers: [LitansService],
    }).compile();

    controller = module.get<LitansController>(LitansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
