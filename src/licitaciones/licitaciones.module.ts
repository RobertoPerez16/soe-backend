import { Module } from '@nestjs/common';
import { LicitacionesService } from './licitaciones.service';
import { LicitacionesController } from './licitaciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Licitacion, LicitacionSchema } from './schema/licitaciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Licitacion.name, schema: LicitacionSchema },
    ]),
  ],
  controllers: [LicitacionesController],
  providers: [LicitacionesService],
})
export class LicitacionesModule {}
