import { Feed } from 'src/resource/feed/entities/feed.entity';
import { DataSource } from 'typeorm';



export const feedProviders = [
  {
    provide: 'FEED_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Feed),
    inject: ['DATABASE'],
  },
];