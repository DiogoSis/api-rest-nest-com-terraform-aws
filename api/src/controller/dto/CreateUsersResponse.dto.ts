import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersResponseDTO {
  @ApiProperty({
    description: 'O id do usuario Criado',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  public id: string;

  constructor(id: string) {
    this.id = id;
  }
}
