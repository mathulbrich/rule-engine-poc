import { z } from 'zod';

export const HasValueGreaterThanTenRule = z.object({
  example: z.object({
    value: z.number().refine((value) => value > 10),
  }),
});

export type HasValueGreaterThanTenRule = z.infer<
  typeof HasValueGreaterThanTenRule
>;
