import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TikectBuyModule } from './tikect-buy/tikect-buy.module';

@Module({
  imports: [UserModule, TikectBuyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
