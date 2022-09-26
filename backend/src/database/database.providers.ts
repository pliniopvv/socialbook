import { Comments } from 'src/resource/comments/entities/comments.entity';
import { Feed } from 'src/resource/feed/entities/feed.entity';
import { Partido } from 'src/resource/partido/entities/partido.entity';
import { Usuario } from 'src/resource/usuario/entities/usuario.entity';
import { env } from 'src/utils/utils.tools';

let DATABASE = env('DATABASE_SELECT');
let DATABASE_SQLITE = env('DATABASE_SQLITE');
let DATABASE_MYSQL = env('DATABASE_MYSQL');
let DATABASE_FILE = env('DATABASE_FILE');

let databaseProviders;
let Entities = [Usuario, Partido, Feed, Comments];


if (DATABASE == DATABASE_MYSQL) {
    databaseProviders = {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [],
        synchronize: true,
      };
} else {
    databaseProviders = {
        type: 'sqlite',
        database: DATABASE_FILE,
        entities: Entities,
        synchronize: true,
      };
}

export { Entities };

export function getDatabaseConfig() {
    return databaseProviders;
}