import { Operator } from 'json-rules-engine';
import { Operators } from '@app/operators/operators';

const hasMinimalLengthFunction = (array: unknown[], length: number) =>
  array.length >= length;

export const hasMinimalLengthOperator = new Operator(
  Operators.MINIMAL_LENGTH,
  hasMinimalLengthFunction,
  Array.isArray,
);
