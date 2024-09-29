import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateUserRequestDTO } from './dto/authenticate-user-request.dtp';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '@root/service/auth.service';
import { AuthenticateUserResponseDTO } from './dto/authenticate-user-reponse.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(
    @Body() credentials: AuthenticateUserRequestDTO,
  ): Promise<any> {
    const token = await this.authService.login({
      email: credentials.email,
      password: credentials.password,
    });

    return new AuthenticateUserResponseDTO(token);
  }
}
