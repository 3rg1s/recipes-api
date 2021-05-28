import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from '../user.dto';
import { userEntity } from '../models/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(userEntity)
    private readonly userRepository: Repository<userEntity>,
  ) {}
  async userCreate(data: UserDto) {
    const plain = data.Password;
    data.Password = await bcrypt.hash(data.Password, 10);
    try {
      await this.userRepository.save(data);
      return 'everything went fine';
    } catch (error) {
      throw new BadRequestException('Something went wrong');
    }
  }
}
