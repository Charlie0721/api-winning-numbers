import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { clearConfigCache } from 'prettier';
import { ILike, Repository } from 'typeorm';
import { Numbers } from './dto/create_numbers.dto'
import { Number } from './numbers.entity'

@Injectable()
export class NumbersService {

    constructor(@InjectRepository(Number) private numberRepository: Repository<Number>) { }
    async sendNumbers(number: Numbers) {

        number.lotteryWinningNumber =  number.numberOne+number.numberTwo+number.numberThree  ;
        console.log("numero ganador: " + number.lotteryWinningNumber);


        if (number.numberOne === "1") {
            number.numberOne = "6"
        } else {
            if (number.numberOne === "6") {
                number.numberOne = "1"

            }
        }
        if (number.numberOne === "2") {
            number.numberOne = "7"
        } else {
            if (number.numberOne === "7") {
                number.numberOne = "2"
            }
        }
        if (number.numberOne === "3") {
            number.numberOne = "8"
        } else {
            if (number.numberOne === "8") {
                number.numberOne = "3"
            }
        }
        if (number.numberOne === "4") {
            number.numberOne = "9"
        } else {
            if (number.numberOne === "9") {
                number.numberOne = "4"
            }
        }
        if (number.numberOne === "5") {
            number.numberOne = "0"
        } else {
            if (number.numberOne === "0") {
                number.numberOne = "5"
            }
        }


        if (number.numberTwo === "1") {
            number.numberTwo = "6"

        } else {
            if (number.numberTwo === "6") {
                number.numberTwo = "1"
            }
        }
        if (number.numberTwo === "2") {
            number.numberTwo = "7"
        } else {
            if (number.numberTwo === "7") {
                number.numberTwo = "2"
            }
        }
        if (number.numberTwo === "3") {
            number.numberTwo = "8"
        } else {
            if (number.numberTwo === "8") {
                number.numberTwo = "3"
            }
        }
        if (number.numberTwo === "4") {
            number.numberTwo = "9"
        } else {
            if (number.numberTwo === "9") {
                number.numberTwo = "4"
            }
        }
        if (number.numberTwo === "5") {
            number.numberTwo = "0"
        } else {
            if (number.numberTwo === "0") {
                number.numberTwo = "5"
            }
        }
        if (number.numberThree === "1") {
            number.numberThree = "6"

        } else {
            if (number.numberThree === "6") {
                number.numberThree = "1"
            }
        }
        if (number.numberThree === "2") {
            number.numberThree = "7"
        } else {
            if (number.numberThree === "7") {
                number.numberThree = "2"
            }
        }
        if (number.numberThree === "3") {
            number.numberThree = "8"
        } else {
            if (number.numberThree === "8") {
                number.numberThree = "3"
            }
        }
        if (number.numberThree === "4") {
            number.numberThree = "9"
        } else {
            if (number.numberThree === "9") {
                number.numberThree = "4"
            }
        }
        if (number.numberThree === "5") {
            number.numberThree = "0"
        } else {
            if (number.numberThree === "0") {
                number.numberThree = "5"
            }
        }
        number.finalNumber = number.numberThree + number.numberTwo + number.numberOne
        number.combinationOne = number.numberTwo + number.numberThree + number.numberOne
      
        number.combinationTwo = number.numberTwo + number.numberOne + number.numberThree
      

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

    async getResultsByWinnerNumber(page: number, limit: number, search: string) {
        const [number, total] = await this.numberRepository.findAndCount({
            where: {
                lotteryWinningNumber: ILike(`${search}%`)
            },
            skip: (page - 1) * limit,
            take: limit
        });
        return [number, total];
    }

}
