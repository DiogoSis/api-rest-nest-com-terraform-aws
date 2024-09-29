import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUsersRequestDTO {
  @ApiProperty({
    description: 'O nome do Usuario',
    example: 'Diogo de Assis',
  })
  @IsNotEmpty()
  public name: string;

  @ApiProperty({
    description: 'o Email do Usuario',
    example: 'diogo@tech.com',
  })
  @IsNotEmpty()
  public email: string;

  @ApiProperty({
    description: 'A Senha do Usuario',
    example: '123456',
  })
  @IsNotEmpty()
  public password: string;
}
