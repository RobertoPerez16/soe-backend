import { Test, TestingModule } from '@nestjs/testing';
import { LicitacionesService } from './licitaciones.service';

describe('LicitacionesService', () => {
  let service: LicitacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicitacionesService],
    }).compile();

    service = module.get<LicitacionesService>(LicitacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
