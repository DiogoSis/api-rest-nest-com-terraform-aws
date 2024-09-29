import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@root/domain/user.domain';
import { UsersRepository } from '@root/repository/users.repository';
import { hash } from 'bcrypt';

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

//valor aleatório adicionado à senha antes do hashing para proteger
const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  //verificação se o usuario já exist
  public async createUser(params: CreateUserParams): Promise<string> {
    const userExists = await this.usersRepository.getUserByEmail(params.email);
    //BadRequest retorna o erro via http
    if (userExists) {
      throw new BadRequestException('Usuario já existe');
    }

    const passwordHash = await hash(params.password, SALT_ROUNDS);
    const user = new User({
      name: params.name,
      email: params.email,
      password: passwordHash,
    });

    await this.usersRepository.createUser(user);

    return user.id;
  }
}
