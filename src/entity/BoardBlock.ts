import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./Board";

@Entity()
export class BoardBlock {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @OneToMany((type) => Board, (board) => board.blocks)
    public board: Board;

    @Column("text")
    public title: string;

    @Column("text")
    public content: string;
}
