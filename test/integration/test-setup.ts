import { AppModule } from '@app/app.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';

export const INTEGRATION_TEST_DEFAULT_TIMEOUT = 300_000;

export class TestSetup {
  public async run(
    cb: (app: INestApplication) => Promise<void>,
  ): Promise<void> {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = moduleFixture.createNestApplication();
    await app.init();

    await cb(app).finally(() => app.close());
  }
}
