import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: "number" })
export class Number {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    lotteryWinningNumber: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({default: null})
    combinationOne: string
    @Column({default: null})
    combinationTwo: string
    @Column({default: null})
    combinationThree: string
    @Column({default: null})
    combinationFour: string

}