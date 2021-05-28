import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserSignupDto } from '../dtos/usersignup.dto';
import { UserLoginDto } from '../dtos/userlogin.dto';
import { UserInterface } from '../models/user.interface';
import { IsEmail } from 'class-validator';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  async createUser(@Body() UserSignupDto: UserSignupDto) {
    return this.UserService.create(UserSignupDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  async loginuser(@Body() userLoginDto: UserLoginDto) {
    return this.UserService.login(userLoginDto);
  }
}
