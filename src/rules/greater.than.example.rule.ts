import { RuleProperties } from 'json-rules-engine';
import { Operators } from '@app/operators/operators';

export const greaterThanExampleRule: RuleProperties = {
  conditions: {
    all: [
      {
        fact: 'example',
        path: 'value',
        operator: Operators.IS_GREATER_THAN,
        value: 10,
      },
    ],
  },
  event: {
    type: 'ExampleIsGreaterThanTen',
  },
};
