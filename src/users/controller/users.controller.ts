import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserSignupDto } from '../dtos/usersignup.dto';
import { UserLoginDto } from '../dtos/userlogin.dto';
import { UserInterface } from '../models/user.interface';
import { IsEmail } from 'class-validator';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/strategies/guards/jwt-auth.guard';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiProperty,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Post('signup')
  @ApiProperty()
  @ApiCreatedResponse({ description: 'User Created successfully' })
  @UsePipes(ValidationPipe)
  async createUser(@Body() UserSignupDto: UserSignupDto) {
    return this.UserService.create(UserSignupDto);
  }

  @Post('login')
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @UsePipes(ValidationPipe)
  async loginuser(@Body() userLoginDto: UserLoginDto) {
    return this.UserService.login(userLoginDto).then((result) => {
      return {
        access_token: result,
      };
    });
  }
}
