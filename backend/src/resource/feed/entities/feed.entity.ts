import { Comments } from "src/resource/comments/entities/comments.entity";
import { Usuario } from "src/resource/usuario/entities/usuario.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
