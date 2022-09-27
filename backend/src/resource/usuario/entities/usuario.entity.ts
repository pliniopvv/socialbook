import { Feed } from "src/resource/feed/entities/feed.entity";
import { Foto } from "src/resource/foto/entities/foto.entity";
import { Partido } from "src/resource/partido/entities/partido.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @Index({unique: true})
    login: string;
    @Column()
    nome: string;
    @Column()
    apelido: string;
    @Column()
    senha: string;

    @OneToMany((type) => Foto, (foto) => foto.usuario)
    foto: Foto[];

    @OneToMany((type) => Feed, (feed) => feed.usuario)
    feed: Feed[];

    @ManyToOne((type) => Partido, { eager: true })
    @JoinColumn()
    partido: Partido;
}
