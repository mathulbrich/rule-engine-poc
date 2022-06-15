import { RuleValidationService } from '@app/services/rule.validation.service';
import { faker } from '@faker-js/faker';

describe(RuleValidationService.name, () => {
  describe('hasSizeExampleRule', () => {
    it('should match minimal example array length', async () => {
      // Setup
      const service = new RuleValidationService();
      const array = faker.datatype.array(
        faker.datatype.number({ min: 2, max: 10 }),
      );

      // Exercise
      const result = await service.validate({ example: { array } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'HasMoreThanTwoExamplesRule' }),
        ]),
      );
    });

    it('should not match minimal example array when length is one', async () => {
      // Setup
      const service = new RuleValidationService();
      const array = faker.datatype.array(
        faker.datatype.number({ min: 0, max: 1 }),
      );

      // Exercise
      const result = await service.validate({ example: { array } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([{ id: 'HasMoreThanTwoExamplesRule' }]),
      );
    });
  });

  describe('greaterThanExampleRule', () => {
    it('should match example value greater than 10', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 11, max: 100 });

      // Exercise
      const result = await service.validate({ example: { value } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'ExampleIsGreaterThanTen' }),
        ]),
      );
    });

    it('should not match example value less or equal than 10', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1, max: 10 });

      // Exercise
      const result = await service.validate({ example: { value } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({ id: 'ExampleIsGreaterThanTen' }),
        ]),
      );
    });
  });
});
