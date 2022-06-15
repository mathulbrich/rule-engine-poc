import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '@app/controllers/health.controller';

describe('AppController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    healthController = app.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should return "Rule engine is running!"', () => {
      expect(healthController.getHello()).toEqual({
        message: 'Rule engine is running!',
      });
    });
  });
});
