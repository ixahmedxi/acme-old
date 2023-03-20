import { z } from 'zod';

import { createRouter, publicProcedure } from '../../utils/trpc';

export const greetingRouter = createRouter({
  greeting: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'World'}!`,
      };
    }),
  examples: publicProcedure.query(async ({ ctx }) => {
    const examples = await ctx.prisma.example.findMany();

    return examples;
  }),
});
