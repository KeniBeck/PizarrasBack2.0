import { Test, TestingModule } from '@nestjs/testing';
import { TikectBuyController } from './tikect-buy.controller';
import { TikectBuyService } from './tikect-buy.service';

describe('TikectBuyController', () => {
  let controller: TikectBuyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TikectBuyController],
      providers: [TikectBuyService],
    }).compile();

    controller = module.get<TikectBuyController>(TikectBuyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
