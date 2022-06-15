import { z } from 'zod';

export const ExampleRequest = z.object({
  example: z.object({
    value: z.number(),
    array: z.array(z.unknown()),
  }),
});

export type ExampleRequest = z.infer<typeof ExampleRequest>;
