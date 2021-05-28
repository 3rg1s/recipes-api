import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  Email: String;

  @MinLength(6)
  Password: String;
}
