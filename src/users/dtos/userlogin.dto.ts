import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  @ApiProperty({ type: 'string', description: 'Email' })
  Email: String;

  @MinLength(6)
  @ApiProperty({ type: 'string', description: 'Password' })
  Password: String;
}
