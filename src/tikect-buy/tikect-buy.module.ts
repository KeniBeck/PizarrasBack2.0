import { Module } from '@nestjs/common';
import { TikectBuyService } from './tikect-buy.service';
import { TikectBuyController } from './tikect-buy.controller';

@Module({
  controllers: [TikectBuyController],
  providers: [TikectBuyService],
})
export class TikectBuyModule {}
