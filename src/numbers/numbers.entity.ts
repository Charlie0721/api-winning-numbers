import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: "number" })
export class Number {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    lotteryWinningNumber: string;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column()
    finalNumber: string
    @Column()
    combinationOne: string
    @Column()
    combinationTwo: string
  

}