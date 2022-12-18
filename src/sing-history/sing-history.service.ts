import { SingHistory } from './entities/sing-history.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSingHistoryDto } from './dto/create-sing-history.dto';
import { UpdateSingHistoryDto } from './dto/update-sing-history.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class SingHistoryService {
  constructor(
    @InjectRepository(SingHistory)
    private singHistoryRepository: Repository<SingHistory>,
  ) {}

  async create(userId: User['id'], createSingHistoryDto: CreateSingHistoryDto) {
    const history = this.singHistoryRepository.create({
      userId,
      ...createSingHistoryDto,
    });
    await this.singHistoryRepository.save(history);
    return history;
  }

  findAll(userId: User['id']) {
    return this.singHistoryRepository.find({ where: { userId } });
  }

  // findOne(id: number) {
  //   return this.singHistoryRepository.findOne({ where: { id } });
  // }

  async update(
    id: number,
    userId: User['id'],
    updateSingHistoryDto: UpdateSingHistoryDto,
  ) {
    const result = await this.singHistoryRepository.update(
      { id, userId },
      updateSingHistoryDto,
    );
    return result.affected > 0;
  }

  async remove(id: number, userId: User['id']) {
    const result = await this.singHistoryRepository.delete({ id, userId });
    return result.affected > 0;
  }
}
