import { ApiProperty } from '@nestjs/swagger';

export class CreateLicitacionDto {
  @ApiProperty({
    example: 'CCENEG-063-01-2022 (Presentación de oferta)',
  })
  readonly processNumber: string;
  @ApiProperty({
    example: 'ACUERDO MARCO DE ASEO Y CAFETERÍA (Presentación de oferta)',
  })
  readonly title: string;
  @ApiProperty({
    example: 'Publicado',
  })
  readonly state: string;
  @ApiProperty({
    example: 'Licitación Pública Acuerdo Marco de Precios.',
  })
  readonly processType: string;
  @ApiProperty({
    example: 'Unidad de Contratación Negocios',
  })
  readonly contractUnit: string;
  @ApiProperty({
    example: 'Presentación de observaciones',
  })
  readonly previousPhase: string;
  @ApiProperty({
    example: 'Sí',
  })
  readonly processValue: string;
  @ApiProperty({
    example: 'Acuerdo Marco de Precios',
  })
  readonly contractType: string;
  @ApiProperty({
    example: 'Artículo 2.2.1.2.1.2.10, Decreto 1082 de 2015',
  })
  readonly contractModalityJustification: string;
  @ApiProperty({
    example: `(a) La condiciones para la contratación del
     Servicio Integral de Aseo...`,
  })
  readonly description: string;
  @ApiProperty({
    example: 2,
  })
  readonly contractLength: number;
  @ApiProperty({
    example: '24/10/2024',
  })
  readonly terminationDate: string;
  @ApiProperty({
    example: 'Plataforma',
  })
  readonly conditionInstallment: string;
  @ApiProperty({
    example: 'Carrera 7 # 26-20 piso...',
  })
  readonly contractAddress: string;
  @ApiProperty({
    example: '0',
  })
  readonly estimatedValue: string;
  @ApiProperty({
    example: true,
  })
  readonly portion: boolean;
  @ApiProperty({
    example: 'Fulanito Pérez',
  })
  readonly createdUserBy: string;

  @ApiProperty({
    example: [],
  })
  readonly biddingDates: any[];
}
