import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { TikectBuyModule } from './tikect-buy/tikect-buy.module';
import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [UserModule, TikectBuyModule, AuthModule, LoginModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
