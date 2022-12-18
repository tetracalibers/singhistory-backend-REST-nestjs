import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingHistory } from './sing-history/entities/sing-history.entity';
import { SingHistoryModule } from './sing-history/sing-history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '192.168.16.2',
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'singhis',
      entities: [SingHistory],
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    SingHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
