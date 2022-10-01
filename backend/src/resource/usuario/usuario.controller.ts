import { LocalAuthGuard } from './../../auth/local-auth.guard';
import { Controller, Get, Body, Patch, Param, Delete, Post, UseGuards, Request, Inject, forwardRef } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { debug } from 'src/utils/utils.tools';

let tag = 'usuario.controller.ts';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
    private authService: AuthService
    ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('verify')
  async verify(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.usuarioService.findAll();
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    if (id == 'me')
      // @ts-ignore
      return this.usuarioService.findOne(req.user.id);
    return this.usuarioService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/partido')
  findOneWithPartido(@Param('id') id: number) {
      return this.usuarioService.findOneWithPartido(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
