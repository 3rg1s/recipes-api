import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Post('signup')
  async createUser() {
    return 'Created user';
  }

  @Post('login')
  async loginuser() {
    return 'User logged in';
  }
}
