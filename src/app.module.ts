import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TikectBuyModule } from './tikect-buy/tikect-buy.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';
import { SellersModule } from './sellers/sellers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    ConfigModule.forRoot({
    isGlobal: true,
  }),UserModule, TikectBuyModule, AuthModule, LoginModule, SellersModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
