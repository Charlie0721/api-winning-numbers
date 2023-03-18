import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { Numbers } from './dto/create_numbers.dto';
import { NumbersService } from './numbers.service';

@Controller('numbers')
export class NumbersController {

    constructor(private readonly numbersService: NumbersService) { }
    @Post()
    sendNumbers(@Body() numbers: Numbers) {

        return this.numbersService.sendNumbers(numbers);

    }

    @Get()
    async getResultsByWinnerNumber(@Query('page') page = 1,
        @Query('limit') limit = 10,
        @Query('search') search = '') {
        const [numbers, total] = await this.numbersService.getResultsByWinnerNumber(page, limit, search);
        return { data: numbers, total };
    }

}
