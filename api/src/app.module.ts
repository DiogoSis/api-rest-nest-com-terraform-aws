import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UserService } from './service/users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UserService],
})
export class AppModule {}
