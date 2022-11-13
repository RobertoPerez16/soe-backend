import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLicitacionDto } from './dto/create-licitacion.dto';
import { UpdateLicitacionDto } from './dto/update-licitacion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Licitacion, LicitacionDocument } from './schema/licitaciones.schema';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class LicitacionesService {
  constructor(
    @InjectModel(Licitacion.name)
    private readonly licitacionModel: Model<LicitacionDocument>,
  ) {}

  create(createLicitacioneDto: CreateLicitacionDto): Promise<Licitacion> {
    try {
      return this.licitacionModel.create(createLicitacioneDto);
    } catch (e) {
      throw new HttpException(
        'Ocurrió un error al crear la licitación. Intente más tarde',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll(request: Request): Promise<Licitacion[]> {
    return this.licitacionModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  findOne(id: string): Promise<Licitacion> {
    return this.licitacionModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateLicitacionDto: UpdateLicitacionDto) {
    return this.licitacionModel.findOneAndUpdate(
      { _id: id },
      updateLicitacionDto,
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return `This action removes a #${id} licitacion`;
  }
}
