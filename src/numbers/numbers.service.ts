import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Numbers } from './dto/create_numbers.dto'
import { Number } from './numbers.entity'

@Injectable()
export class NumbersService {

    constructor(@InjectRepository(Number) private numberRepository: Repository<Number>) { }

    async sendNumbers(number: Numbers) {


        number.lotteryWinningNumber = number.numberOne.toString() + number.numberTwo.toString() + number.numberThree.toString() + number.numberFour.toString();
        if (number.numberOne === 1) {
            number.numberOne = 6

        } else {
            if (number.numberOne === 6) {
                number.numberOne = 1
            }
        }
        if (number.numberOne === 2) {
            number.numberOne = 7
        } else {
            if (number.numberOne === 7) {
                number.numberOne = 2
            }
        }
        if (number.numberOne === 3) {
            number.numberOne = 8
        } else {
            if (number.numberOne === 8) {
                number.numberOne = 3
            }
        }
        if (number.numberOne === 4) {
            number.numberOne = 9
        } else {
            if (number.numberOne === 9) {
                number.numberOne = 4
            }
        }
        if (number.numberOne === 5) {
            number.numberOne = 0
        } else {
            if (number.numberOne === 0) {
                number.numberOne = 5
            }
        }


        if (number.numberTwo === 1) {
            number.numberTwo = 6

        } else {
            if (number.numberTwo === 6) {
                number.numberTwo = 1
            }
        }
        if (number.numberTwo === 2) {
            number.numberTwo = 7
        } else {
            if (number.numberTwo === 7) {
                number.numberTwo = 2
            }
        }
        if (number.numberTwo === 3) {
            number.numberTwo = 8
        } else {
            if (number.numberTwo === 8) {
                number.numberTwo = 3
            }
        }
        if (number.numberTwo === 4) {
            number.numberTwo = 9
        } else {
            if (number.numberTwo === 9) {
                number.numberTwo = 4
            }
        }
        if (number.numberTwo === 5) {
            number.numberTwo = 0
        } else {
            if (number.numberTwo === 0) {
                number.numberTwo = 5
            }
        }
        if (number.numberThree === 1) {
            number.numberThree = 6

        } else {
            if (number.numberThree === 6) {
                number.numberThree = 1
            }
        }
        if (number.numberThree === 2) {
            number.numberThree = 7
        } else {
            if (number.numberThree === 7) {
                number.numberThree = 2
            }
        }
        if (number.numberThree === 3) {
            number.numberThree = 8
        } else {
            if (number.numberThree === 8) {
                number.numberThree = 3
            }
        }
        if (number.numberThree === 4) {
            number.numberThree = 9
        } else {
            if (number.numberThree === 9) {
                number.numberThree = 4
            }
        }
        if (number.numberThree === 5) {
            number.numberThree = 0
        } else {
            if (number.numberThree === 0) {
                number.numberThree = 5
            }
        }
        if (number.numberFour === 1) {
            number.numberFour = 6

        } else {
            if (number.numberFour === 6) {
                number.numberFour = 1
            }
        }
        if (number.numberFour === 2) {
            number.numberFour = 7
        } else {
            if (number.numberFour === 7) {
                number.numberFour = 2
            }
        }
        if (number.numberFour === 3) {
            number.numberFour = 8
        } else {
            if (number.numberFour === 8) {
                number.numberFour = 3
            }
        }
        if (number.numberFour === 4) {
            number.numberFour = 9
        } else {
            if (number.numberFour === 9) {
                number.numberFour = 4
            }
        }
        if (number.numberFour === 5) {
            number.numberFour = 0
        } else {
            if (number.numberFour === 0) {
                number.numberFour = 5
            }
        }

        number.combinationOne = number.numberThree.toString() + number.numberTwo.toString() + number.numberFour.toString()
        number.combinationTwo = number.numberThree.toString() + number.numberFour.toString() + number.numberTwo.toString()
        number.combinationThree = number.numberTwo.toString() + number.numberThree.toString() + number.numberFour.toString()
        number.combinationFour = number.numberFour.toString() + number.numberThree.toString() + number.numberTwo.toString()
        const numberFound = await this.numberRepository.findOne({
            where: {
                lotteryWinningNumber: number.lotteryWinningNumber
            }
        })
        if (numberFound) {
            return new HttpException('Number already exists', HttpStatus.CONFLICT)
        }
        const newNumbers = await this.numberRepository.create(number);
        return this.numberRepository.save(newNumbers)
    }



}
