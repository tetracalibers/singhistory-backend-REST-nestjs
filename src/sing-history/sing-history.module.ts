import { SingHistory } from './entities/sing-history.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SingHistoryService } from './sing-history.service';
import { SingHistoryController } from './sing-history.controller';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SingHistory, User])],
  controllers: [SingHistoryController],
  providers: [SingHistoryService],
  exports: [TypeOrmModule],
})
export class SingHistoryModule {}
