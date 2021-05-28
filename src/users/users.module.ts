import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { userEntity } from './models/user.entity';
import { UsersService } from './service/users.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([userEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
