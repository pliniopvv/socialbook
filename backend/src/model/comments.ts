import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Feed } from './feed';
import { Usuario } from './usuario';

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
