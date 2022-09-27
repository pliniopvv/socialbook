import { Controller, Get, Body, Patch, Param, Delete, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Post('verify')
  async verify(@Body() body: any) {
    let {login, senha} = body;
    let user = await this.usuarioService.find(login, senha);
    if (user) {
      return user[0];
    } else {
      return null;
    }
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id == 'me')
      return this.usuarioService.findOne(1);
    return this.usuarioService.findOne(+id);
  }

  @Get(':id/partido')
  findOneWithPartido(@Param('id') id: number) {
      return this.usuarioService.findOneWithPartido(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
