import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { LicitacionesService } from './licitaciones.service';
import { CreateLicitacionDto } from './dto/create-licitacion.dto';
import { UpdateLicitacionDto } from './dto/update-licitacion.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('licitaciones')
@Controller('licitaciones')
export class LicitacionesController {
  constructor(private readonly licitacionesService: LicitacionesService) {}

  @Post()
  create(@Body() createLicitacioneDto: CreateLicitacionDto) {
    return this.licitacionesService.create(createLicitacioneDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() request: Request) {
    return this.licitacionesService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licitacionesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLicitacioneDto: UpdateLicitacionDto,
  ) {
    return this.licitacionesService.update(id, updateLicitacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licitacionesService.remove(id);
  }
}
