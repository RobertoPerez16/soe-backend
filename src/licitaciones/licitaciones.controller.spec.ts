import { Test, TestingModule } from '@nestjs/testing';
import { LicitacionesController } from './licitaciones.controller';
import { LicitacionesService } from './licitaciones.service';

describe('LicitacionesController', () => {
  let controller: LicitacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicitacionesController],
      providers: [LicitacionesService],
    }).compile();

    controller = module.get<LicitacionesController>(LicitacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
