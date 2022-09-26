import { Feed } from 'src/resource/feed/entities/feed.entity';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comments extends Feed {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    usuario: Usuario;
    @Column()
    texto: string;
    @Column()
    create_at: Date;

    @ManyToOne((type) => Feed, (feed) => feed.comments)
    feed: Feed;
}
