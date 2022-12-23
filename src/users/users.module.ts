import { SingHistory } from 'src/sing-history/entities/sing-history.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, SingHistory])],
  controllers: [UsersController],
  providers: [UsersService],
  // UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
