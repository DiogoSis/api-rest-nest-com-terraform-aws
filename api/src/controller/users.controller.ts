import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUsersRequestDTO } from './dto/CreateUsersRequest.dto';
import { CreateUsersResponseDTO } from './dto/CreateUsersResponse.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from '@root/service/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'User Created',
    type: CreateUsersResponseDTO,
  })
  public async createUser(
    @Body() createUserBody: CreateUsersRequestDTO,
  ): Promise<CreateUsersResponseDTO> {
    const createdUserID = await this.usersService.createUser({
      name: createUserBody.name,
      email: createUserBody.email,
      password: createUserBody.password,
    });
    return new CreateUsersResponseDTO(createdUserID);
  }
}
