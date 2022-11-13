import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginDto {
  @ApiProperty({
    example: 'johndoe@gmail.com',
  })
  readonly email: string;

  @ApiProperty({
    example: '12345678',
  })
  readonly password: string;
}
