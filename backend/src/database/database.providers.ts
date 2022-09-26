import { Comments } from 'src/model/comments';
import { Feed } from 'src/model/feed';
import { Partido } from 'src/model/partido';
import { Usuario } from 'src/model/usuario';
import { env } from 'src/utils/utils.tools';
import { DataSource } from 'typeorm';

let DATABASE = env('DATABASE_SELECT');
let DATABASE_SQLITE = env('DATABASE_SQLITE');
let DATABASE_MYSQL = env('DATABASE_MYSQL');
let DATABASE_FILE = env('DATABASE_FILE');

let databaseProviders;
let entities = [Usuario, Partido, Feed, Comments];


if (DATABASE == DATABASE_MYSQL) {
    databaseProviders = [
    {
        provide: 'DATABASE',
        useFactory: async () => {
        const dataSource = new DataSource({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: entities,
            synchronize: true,
        });

        return dataSource.initialize();
        },
    },
    ];
} else {
    databaseProviders = [
        {
            provide: 'DATABASE',
            useFactory: async () => {
            const dataSource = new DataSource({
                type: 'sqlite',
                database: env('DATABASE_FILE'),
                entities: entities,
                synchronize: true,
            });
    
            return dataSource.initialize();
            },
        },
        ];
}

export { databaseProviders };