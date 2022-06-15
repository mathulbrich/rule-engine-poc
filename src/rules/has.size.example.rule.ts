import { RuleProperties } from 'json-rules-engine';
import { Operators } from '@app/operators/operators';

export const hasSizeExampleRule: RuleProperties = {
  conditions: {
    all: [
      {
        fact: 'example',
        path: 'array',
        operator: Operators.MINIMAL_LENGTH,
        value: 2,
      },
    ],
  },
  event: {
    type: 'HasMoreThanTwoExamplesRule',
  },
};
