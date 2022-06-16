import { RuleValidationService } from '@app/services/rule.validation.service';
import { faker } from '@faker-js/faker';

describe(RuleValidationService.name, () => {
  describe('HasAtLeastTwoArrayItemsRule', () => {
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
          expect.objectContaining({ id: 'HasAtLeastTwoArrayItemsRule' }),
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
        expect.not.arrayContaining([{ id: 'HasAtLeastTwoArrayItemsRule' }]),
      );
    });
  });

  describe('HasValueGreaterThanTenRule', () => {
    it('should match example value greater than 10', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 11, max: 100 });

      // Exercise
      const result = await service.validate({ example: { value } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'HasValueGreaterThanTenRule' }),
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
          expect.objectContaining({ id: 'HasValueGreaterThanTenRule' }),
        ]),
      );
    });
  });

  describe('AndConditionalExampleRule', () => {
    it('should match example value greater than hundred and array empty', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 101, max: 200 });
      const array: unknown[] = [];

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'AndConditionalExampleRule' }),
        ]),
      );
    });

    it('should not match example value less or equal than hundred and array not empty', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1, max: 9 });
      const array = faker.datatype.array(1);

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({ id: 'AndConditionalExampleRule' }),
        ]),
      );
    });

    it('should not match example value greater than hundred and array not empty', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 101, max: 200 });
      const array = faker.datatype.array(1);

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({ id: 'AndConditionalExampleRule' }),
        ]),
      );
    });

    it('should not match example value less or equal than hundred and array empty', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1, max: 9 });
      const array: unknown[] = [];

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({ id: 'AndConditionalExampleRule' }),
        ]),
      );
    });
  });

  describe('OrConditionalExampleRule', () => {
    it('should match example value greater than thousand and array have less than five items', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1001, max: 2000 });
      const array = faker.datatype.array(
        faker.datatype.number({ min: 0, max: 4 }),
      );

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'OrConditionalExampleRule' }),
        ]),
      );
    });

    it('should match example value greater than thousand and array have five items', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1001, max: 2000 });
      const array = faker.datatype.array(5);

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'OrConditionalExampleRule' }),
        ]),
      );
    });

    it('should match example value less or equal than thousand and array have five items', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1, max: 1000 });
      const array = faker.datatype.array(5);

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ id: 'OrConditionalExampleRule' }),
        ]),
      );
    });

    it('should not match example value less or equal than thousand and array have less than five items', async () => {
      // Setup
      const service = new RuleValidationService();
      const value = faker.datatype.number({ min: 1, max: 1000 });
      const array = faker.datatype.array(
        faker.datatype.number({ min: 0, max: 4 }),
      );

      // Exercise
      const result = await service.validate({ example: { value, array } });

      // Verify
      expect(result.rules).toEqual(
        expect.not.arrayContaining([
          expect.objectContaining({ id: 'OrConditionalExampleRule' }),
        ]),
      );
    });
  });
});
