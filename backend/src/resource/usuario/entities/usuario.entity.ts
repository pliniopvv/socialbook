import { Partido } from "src/resource/partido/entities/partido.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
