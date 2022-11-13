import { PartialType } from '@nestjs/swagger';
import { CreateLicitacionDto } from './create-licitacion.dto';

export class UpdateLicitacionDto extends PartialType(CreateLicitacionDto) {}
