import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BoardBlock } from "./BoardBlock";

@Entity()
export class Board {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public userId: string;

    @Column("text")
    public title: string;

    @OneToMany((type) => BoardBlock, (block) => block.board)
    public blocks: BoardBlock[];
}
