import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateUsersRequestDTO } from './dto/create-users-request.dto';
import { CreateUsersResponseDTO } from './dto/create-users-response.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from '@root/service/users.service';
import { GetUserByIDResponseDTO } from './dto/get-user-by-id-response.dto';

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

  @Get(':userID')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User Found',
    type: GetUserByIDResponseDTO,
  })
  public async getUserByID(
    @Param('userID') userID: string,
  ): Promise<GetUserByIDResponseDTO> {
    const userResult = await this.usersService.getUserByID(userID);

    return new GetUserByIDResponseDTO({
      id: userResult.id,
      name: userResult.name,
      email: userResult.email,
      createdAt: userResult.createdAt.toISOString(),
      updatedAt: userResult.updatedAt.toISOString(),
    });
  }
}
