import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";

@Entity()
export class Board {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column("text")
    public refId: string;

    @Column("text")
    public title: string;

    @Column("text")
    public createdAt: string;

    @OneToMany((type) => Task, (task) => task.board)
    public tasks: Task[];
}
