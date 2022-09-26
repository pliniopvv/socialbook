import { Feed } from "src/resource/feed/entities/feed.entity";
import { Partido } from "src/resource/partido/entities/partido.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    login: string;
    @Column()
    nome: string;
    @Column()
    apelido: string;
    @Column()
    senha: string;
    @Column()
    profile: string;

    @OneToMany((type) => Feed, (feed) => feed.usuario)
    feed: Feed[];

    @ManyToOne((type) => Partido)
    @JoinColumn()
    partido: Partido;
}
