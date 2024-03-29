import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BeforeInsert, Repository } from 'typeorm';
import { UserSignupDto } from '../dtos/usersignup.dto';
import { userEntity } from '../models/user.entity';
import { UserLoginDto } from '../dtos/userlogin.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userEntity)
    private readonly userRepository: Repository<userEntity>,
    private authService: AuthService,
  ) {}

  async create(data: UserSignupDto) {
    data.Email = data.Email.toLowerCase();
    const plain = data.Password;
    data.Password = await this.authService.hashPassword(plain);
    const Email = data.Email;
    const user = await this.findbyemail(Email.toString());
    if (user) {
      throw new BadRequestException('User exists, try to login instead');
    }
    return await this.userRepository
      .save(data)
      .then((success) => {
        delete data.Password;
        return { message: 'User Created', user: data };
      })
      .catch((error) => {
        throw new BadRequestException('Something went wrong');
      });
  }

  async login(data: UserLoginDto) {
    data.Email = data.Email.toLowerCase();
    const Email = data.Email;
    const user = await this.findbyemail(Email.toString());
    if (!user) {
      throw new BadRequestException('invalid credentials');
    }
    if (
      !(await this.authService.comparePasswords(data.Password, user.Password))
    ) {
      throw new BadRequestException('invalid credentials');
    } else {
      return this.authService.generatejwt(data);
    }
  }

  async findbyemail(Email: string) {
    return await this.userRepository.findOne({ Email });
  }
}
