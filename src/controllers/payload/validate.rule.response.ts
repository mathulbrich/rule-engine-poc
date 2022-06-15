import { z } from 'zod';

export const ValidateRuleResponse = z.object({
  rules: z.array(
    z.object({
      id: z.string(),
    }),
  ),
});

export type ValidateRuleResponse = z.infer<typeof ValidateRuleResponse>;
