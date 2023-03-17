import { Controller, Post, Body, Get } from '@nestjs/common';
import { Numbers } from './dto/create_numbers.dto';
import { NumbersService } from './numbers.service';

@Controller('numbers')
export class NumbersController {

    constructor(private readonly numbersService: NumbersService) { }
    @Post()
    sendNumbers(@Body() numbers: Numbers) {

        return this.numbersService.sendNumbers(numbers);

    }

}
