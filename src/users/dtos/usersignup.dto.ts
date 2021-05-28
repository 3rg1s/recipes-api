import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserSignupDto {
  @IsNotEmpty()
  FirstName: String;

  @IsNotEmpty()
  LastName: String;

  @IsNotEmpty()
  Age: Number;

  @IsEmail()
  @IsNotEmpty()
  Email: String;

  @MinLength(6)
  @IsNotEmpty()
  Password: String;
}
