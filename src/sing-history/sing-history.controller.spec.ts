import { Test, TestingModule } from '@nestjs/testing';
import { SingHistoryController } from './sing-history.controller';
import { SingHistoryService } from './sing-history.service';

describe('SingHistoryController', () => {
  let controller: SingHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SingHistoryController],
      providers: [SingHistoryService],
    }).compile();

    controller = module.get<SingHistoryController>(SingHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
