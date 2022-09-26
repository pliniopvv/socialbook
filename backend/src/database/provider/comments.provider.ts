import { Comments } from 'src/resource/comments/entities/comments.entity';
import { DataSource } from 'typeorm';



export const commentsProviders = [
  {
    provide: 'COMMENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Comments),
    inject: ['DATABASE'],
  },
];