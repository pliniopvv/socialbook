import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comments } from "./comments";
import { Usuario } from "./usuario";

@Entity()
export class Feed {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    usuario: Usuario;
    @Column()
    texto: string;
    @Column()
    create_at: Date;

    @OneToMany((type) => Comments, (comments) => comments.feed)
    comments: Comments[] | null;
}
