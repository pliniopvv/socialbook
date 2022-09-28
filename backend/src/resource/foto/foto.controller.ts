import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Response } from '@nestjs/common';
import { FotoService } from './foto.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { debug, env } from 'src/utils/utils.tools';
import { CreateFotoDto } from './dto/create-foto.dto';
import * as fs from 'fs';
import { Usuario } from '../usuario/entities/usuario.entity';

@Controller('foto')
export class FotoController {
  constructor(private readonly fotoService: FotoService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('foto', {
    dest: env('DIR_UPLOAD')
  }))
  create(@Param('id') id: number, @UploadedFile() foto: Express.Multer.File) {
    // @ts-ignore
    debug(0,__filename, foto);

    let u = new Usuario();
    u.id = id;

    let c = new CreateFotoDto();
    c.arquivo = foto.filename;
    c.originalName = foto.originalname;
    c.usuario = u;

    return this.fotoService.create(c);
  }

  @Get(':filename')
  findOneFile(@Param('filename') filename: string, @Response() res) {
    if (env("DEBUG")) debug(0,"GET /file/:filename >", filename);
    let pathfile = `${env("DIR_UPLOAD")}/${filename}`;
    fs.realpath(pathfile, (_error, realpath) => {
      if (_error) debug(0, __filename, JSON.stringify(_error));
      else {
        debug(0,"realpath >", realpath);
        fs.access(pathfile, (error) => {
          if (error) res.status(404).send({msg: "Imagem não localizada", error});
          else res.status(200).sendFile(realpath);
        });
      }
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotoService.remove(+id);
  }
}
