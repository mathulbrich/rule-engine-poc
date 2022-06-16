import { z } from 'zod';

const ValueIsAboveHundred = z.object({
  value: z.number().refine((value) => value > 100),
});

const ArrayIsEmpty = z.object({
  array: z.array(z.unknown()).refine((array) => array.length === 0),
});

export const AndConditionalExampleRule = z.object({
  example: ValueIsAboveHundred.and(ArrayIsEmpty),
});

export type AndConditionalExampleRule = z.infer<
  typeof AndConditionalExampleRule
>;
