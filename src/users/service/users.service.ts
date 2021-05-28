import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSignupDto } from '../dtos/usersignup.dto';
import { userEntity } from '../models/user.entity';
import * as bcrypt from 'bcrypt';
import { UserLoginDto } from '../dtos/userlogin.dto';
import { from, Observable } from 'rxjs';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { UserInterface } from '../models/user.interface';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userEntity)
    private readonly userRepository: Repository<userEntity>,
    private authService: AuthService,
  ) {}

  async create(data: UserSignupDto) {
    const plain = data.Password;
    data.Password = await this.authService.hashPassword(plain);
    try {
      await this.userRepository.save(data);
      return 'everything went fine';
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }

  async login(login: UserLoginDto) {
    const Email = login.Email;
    const user = await this.userRepository.findOne({ Email });
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (
      !(await this.authService.comparePasswords(login.Password, user.Password))
    ) {
      throw new BadRequestException('invalid credentials');
    }
  }
}
