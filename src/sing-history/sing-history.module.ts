import { Module } from '@nestjs/common';
import { SingHistoryService } from './sing-history.service';
import { SingHistoryController } from './sing-history.controller';

@Module({
  controllers: [SingHistoryController],
  providers: [SingHistoryService],
})
export class SingHistoryModule {}
