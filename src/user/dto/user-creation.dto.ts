import { ApiProperty } from '@nestjs/swagger';

export class UserCreationDto {
  @ApiProperty({
    example: 'John',
  })
  readonly name: string;
  @ApiProperty({
    example: 'Doe',
  })
  readonly lastname: string;
  @ApiProperty({
    example: '11111111111',
  })
  readonly identificationNumber: string;
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  readonly email: string;
  @ApiProperty({
    example: true,
  })
  readonly isActive: boolean;

  @ApiProperty({
    example: 'Admin',
  })
  readonly rol: string;

  @ApiProperty({
    example: '123456',
  })
  password: string;
}
