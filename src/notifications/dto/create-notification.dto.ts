import { ApiProperty } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({
    example: 'Creación de licitación',
  })
  readonly title: string;

  @ApiProperty({
    example: 'El usuario xxxxxx ha creado una nueva licitación',
  })
  readonly description: string;

  @ApiProperty({
    example: 'user@user.com',
  })
  readonly createdBy: string;

  @ApiProperty({
    example: false,
  })
  readonly hasSeen: boolean;

  @ApiProperty({
    example: 'id of Licitations model',
  })
  readonly biddingId: string;

  @ApiProperty({
    example: 'observationsDraftSpecifications',
  })
  dateType: string;
}
