import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Partido {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;
    @Column()
    sigla: string;
    @Column()
    numero: number;
    @Column()
    bandeira: string;

    // @OneToMany((type) => Usuario, (usuario) => usuario.partido)
    // usuarios: Usuario[];
}
