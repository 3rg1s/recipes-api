import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from './controller/users.controller';
import { userEntity } from './models/user.entity';
import { UsersService } from './service/users.service';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([userEntity]), AuthModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
