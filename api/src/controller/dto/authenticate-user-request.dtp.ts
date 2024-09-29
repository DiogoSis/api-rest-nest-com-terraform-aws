import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticateUserRequestDTO {
  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    example: 'diogo@email.com',
  })
  @IsNotEmpty()
  public email: string;

  @ApiProperty({
    name: 'password',
    description: 'Password of the user',
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  public password: string;
}
