import { Module } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { NumbersController } from './numbers.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Number } from './numbers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Number])],
  providers: [NumbersService],
  controllers: [NumbersController]
})
export class NumbersModule {}
