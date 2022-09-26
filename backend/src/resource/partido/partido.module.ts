import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { Partido } from './entities/partido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from 'src/database/database.providers';

@Module({
  imports: [TypeOrmModule.forFeature(Entities)],
  controllers: [PartidoController],
  providers: [PartidoService]
})
export class PartidoModule {}
