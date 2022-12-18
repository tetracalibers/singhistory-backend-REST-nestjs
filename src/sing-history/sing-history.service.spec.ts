import { Test, TestingModule } from '@nestjs/testing';
import { SingHistoryService } from './sing-history.service';

describe('SingHistoryService', () => {
  let service: SingHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SingHistoryService],
    }).compile();

    service = module.get<SingHistoryService>(SingHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
