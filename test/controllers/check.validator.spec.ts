import { TestSetup } from '../integration/test-setup';
import * as request from 'supertest';
import { faker } from '@faker-js/faker';

describe('Check Validator Controller', () => {
  it('should call validate endpoint', async () => {
    const array = faker.datatype.array(3);
    const value = faker.datatype.number({ min: 11, max: 20 });
    await new TestSetup().run(async (app) => {
      const response = await request(app.getHttpServer())
        .post('/validate')
        .send({ example: { array, value } })
        .expect(200);

      expect(response.body).toEqual({
        rules: [
          { id: 'ExampleIsGreaterThanTen' },
          { id: 'HasMoreThanTwoExamplesRule' },
        ],
      });
    });
  });

  it('should return Bad Request when request body is invalid', async () => {
    const body = faker.datatype.json();
    await new TestSetup().run(async (app) => {
      const response = await request(app.getHttpServer())
        .post('/validate')
        .send(body)
        .expect(400);

      expect(response.body).toEqual({
        message: 'Bad Request',
        statusCode: 400,
      });
    });
  });
});
