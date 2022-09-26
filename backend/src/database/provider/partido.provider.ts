import { Partido } from 'src/resource/partido/entities/partido.entity';
import { DataSource } from 'typeorm';



export const partidoProviders = [
  {
    provide: 'PARTIDO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Partido),
    inject: ['DATABASE'],
  },
];