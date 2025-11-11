import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { BcryptService } from './bcrypt/bcrypt.service';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [ UsersModule, PrismaModule, BcryptModule, AuthModule, MenuModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService, BcryptService],
})
export class AppModule {}
