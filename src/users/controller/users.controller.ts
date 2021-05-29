import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserSignupDto } from '../dtos/usersignup.dto';
import { UserLoginDto } from '../dtos/userlogin.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiProperty,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Post('signup')
  @ApiProperty()
  @ApiCreatedResponse({ description: 'User Created successfully' })
  async createUser(@Body() UserSignupDto: UserSignupDto) {
    return this.UserService.create(UserSignupDto);
  }

  @Post('login')
  @ApiOkResponse({ description: 'User Login' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  async loginuser(@Body() userLoginDto: UserLoginDto) {
    return this.UserService.login(userLoginDto).then((result) => {
      return {
        access_token: result,
      };
    });
  }
}
