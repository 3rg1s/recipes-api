import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BeforeInsert } from 'typeorm';

export class UserSignupDto {
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'FirstName' })
  FirstName: String;

  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'LastName' })
  LastName: String;

  @IsNotEmpty()
  @ApiProperty({ type: 'number', description: 'Age' })
  Age: Number;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Email' })
  Email: String;

  @MinLength(6)
  @IsNotEmpty()
  @ApiProperty({ type: 'string', description: 'Password' })
  Password: String;

  @BeforeInsert()
  emailToLowerCase() {
    this.Email = this.Email.toLowerCase();
  }
}
