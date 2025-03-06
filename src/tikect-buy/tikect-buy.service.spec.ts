import { Test, TestingModule } from '@nestjs/testing';
import { TikectBuyService } from './tikect-buy.service';

describe('TikectBuyService', () => {
  let service: TikectBuyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TikectBuyService],
    }).compile();

    service = module.get<TikectBuyService>(TikectBuyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
