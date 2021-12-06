import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Board } from "./Board";

@Entity()
export class BoardBlock {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany((type) => Board, (board) => board.blocks)
    board: Board;

    @Column("text")
    title: string;

    @Column("text")
    content: string;
}
