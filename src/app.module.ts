import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/config-db'
import { NumbersModule } from './numbers/numbers.module';
@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.development.env',
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync(typeOrmConfigAsync),
  NumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
