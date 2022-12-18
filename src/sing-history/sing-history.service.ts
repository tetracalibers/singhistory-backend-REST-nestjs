import { SingHistory } from './entities/sing-history.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSingHistoryDto } from './dto/create-sing-history.dto';
import { UpdateSingHistoryDto } from './dto/update-sing-history.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SingHistoryService {
  constructor(
    @InjectRepository(SingHistory)
    private singHistoryRepository: Repository<SingHistory>,
  ) {}

  async create(createSingHistoryDto: CreateSingHistoryDto) {
    const history = this.singHistoryRepository.create(createSingHistoryDto);
    await this.singHistoryRepository.save(history);
    return history;
  }

  findAll() {
    return this.singHistoryRepository.find();
  }

  findOne(id: number) {
    return this.singHistoryRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSingHistoryDto: UpdateSingHistoryDto) {
    const result = await this.singHistoryRepository.update(
      id,
      updateSingHistoryDto,
    );
    return result;
  }

  async remove(id: number) {
    const result = await this.singHistoryRepository.delete(id);
    return result.affected > 0;
  }
}
