import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { BoardBlock } from "./BoardBlock";

@Entity()
export class Board {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    userId: string;

    @Column("text")
    title: string;

    @OneToMany((type) => BoardBlock, (block) => block.board)
    blocks: BoardBlock[];
}
