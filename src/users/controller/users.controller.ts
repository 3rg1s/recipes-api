import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserDto } from '../user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  async createUser(@Body() userDto: UserDto) {
    return userDto;
  }

  @Post('login')
  async loginuser() {
    return 'User logged in';
  }
}
