import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  private usuarioRepository: Repository<Usuario>;

  constructor(
    private dataSource: DataSource
  ) {
    this.usuarioRepository = dataSource.getRepository(Usuario);
  }

  create(createUsuarioDto: CreateUsuarioDto) {
    let u = new Usuario();
    u.apelido = createUsuarioDto.apelido;
    u.login = createUsuarioDto.login;
    u.nome = createUsuarioDto.nome;
    u.partido = createUsuarioDto.partido;
    u.foto = createUsuarioDto.foto;
    u.senha = createUsuarioDto.senha;

    return this.dataSource.manager.save(u);
  }

  findAll() {
    return this.usuarioRepository.find();
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  findOneWithPartido(id: number) {
    return this.usuarioRepository.find({
      where: {
        id
      }, relations: {
        partido: true,
      }
    })
  }

  find(login:string, senha: string) {
    return this.usuarioRepository.find({where: {
      login,
      senha
    }});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update({id}, updateUsuarioDto);
  }

  remove(id: number) {
    return this.usuarioRepository.delete({id});
  }
}
