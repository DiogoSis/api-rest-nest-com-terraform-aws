import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIDResponseDTO {
  @ApiProperty({
    name: 'id',
    description: 'id do usuario',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  public id: string;

  @ApiProperty({
    name: 'name',
    description: 'nome do usuario',
    example: 'Diogo de Assis',
  })
  public name: string;

  @ApiProperty({
    name: 'email',
    description: 'email do usuario',
    example: 'diogo@email.com',
  })
  public email: string;

  @ApiProperty({
    name: 'createdAt',
    description: 'data da criação',
    example: '2012-01-01T00:00:00.000Z',
  })
  public createdAt: string;

  @ApiProperty({
    name: 'updateAt',
    description: 'data da modificação',
    example: '2013-01-01T00:00:00.000Z',
  })
  public updatedAt: string;

  constructor(params: GetUserByIDResponseDTO) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.createdAt = params.createdAt.toString();
    this.updatedAt = params.updatedAt.toString();
  }
}
