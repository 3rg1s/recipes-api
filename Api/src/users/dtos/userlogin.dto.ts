import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BeforeInsert } from 'typeorm';

export class UserLoginDto {
  @IsEmail()
  @ApiProperty({ type: 'string', description: 'Email' })
  Email: String;

  @MinLength(6)
  @ApiProperty({ type: 'string', description: 'Password' })
  Password: String;

  @BeforeInsert()
  emailToLowerCase() {
    this.Email = this.Email.toLowerCase();
  }
}
