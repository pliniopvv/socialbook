import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    arquivo: string;

    @Column()
    originalName: string;

    @Column()
    create_at: Date = new Date();

    @ManyToOne((type) => Usuario, (usuario) => usuario.foto)
    usuario: Usuario;
}
