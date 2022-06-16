import { z } from 'zod';

export const HasAtLeastTwoArrayItemsRule = z.object({
  example: z.object({
    array: z.array(z.unknown()).refine((array) => array.length >= 2),
  }),
});

export type HasAtLeastTwoArrayItemsRule = z.infer<
  typeof HasAtLeastTwoArrayItemsRule
>;
