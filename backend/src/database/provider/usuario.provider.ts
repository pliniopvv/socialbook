import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { DataSource } from 'typeorm';



export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Usuario),
    inject: ['DATABASE'],
  },
];