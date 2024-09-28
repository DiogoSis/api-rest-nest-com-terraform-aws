import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUsersRequestDTO } from './dto/CreateUsersRequest.dto';
import { CreateUsersResponseDTO } from './dto/CreateUsersResponse.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User Created',
    type: CreateUsersResponseDTO,
  })
  public async createUser(
    @Body() createUserBody: CreateUsersRequestDTO,
  ): Promise<CreateUsersResponseDTO> {
    console.log(createUserBody);
    return { id: 'randon-id' };
  }
}
