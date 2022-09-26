import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Partido } from "./partido";

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

    @OneToMany((type) => Partido, (partido) => partido.usuario)
    partido: Partido;
}
