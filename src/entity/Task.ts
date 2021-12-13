import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./Board";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column('text')
    public assignee: string;

    @Column("text")
    public title: string;

    @Column("text")
    public estimate: string;

    @Column("text")
    public priority: string;

    @Column("int")
    public order: number;

    @Column("text")
    public description: string;

    @Column("text")
    public createdAt: string;
    
    @Column("text")
    public updatedAt: string;

    @ManyToOne((type) => Board, (block) => block.tasks)
    public board: Board;
}
