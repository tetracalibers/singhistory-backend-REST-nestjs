import { Injectable } from '@nestjs/common';
import { CreateSingHistoryDto } from './dto/create-sing-history.dto';
import { UpdateSingHistoryDto } from './dto/update-sing-history.dto';

@Injectable()
export class SingHistoryService {
  create(createSingHistoryDto: CreateSingHistoryDto) {
    return 'This action adds a new singHistory';
  }

  findAll() {
    return `This action returns all singHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} singHistory`;
  }

  update(id: number, updateSingHistoryDto: UpdateSingHistoryDto) {
    return `This action updates a #${id} singHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} singHistory`;
  }
}
