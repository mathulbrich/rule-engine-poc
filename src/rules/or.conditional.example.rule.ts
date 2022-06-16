import { z } from 'zod';

const ArrayLengthIsFive = z.object({
  array: z.array(z.unknown()).refine((array) => array.length === 5),
});

const ValueIsAboveThousand = z.object({
  value: z.number().refine((value) => value > 1000),
});

export const OrConditionalExampleRule = z.object({
  example: ValueIsAboveThousand.or(ArrayLengthIsFive),
});

export type OrConditionalExampleRule = z.infer<typeof OrConditionalExampleRule>;
