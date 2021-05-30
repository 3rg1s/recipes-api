import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from 'src/users/dtos/userlogin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generatejwt(user: UserLoginDto) {
    return this.jwtService.signAsync({ user });
  }

  hashPassword(password: String) {
    return bcrypt.hash(password, 12);
  }

  comparePasswords(password: String, storedPasswordHash: String): any {
    return bcrypt.compare(password, storedPasswordHash);
  }
}
