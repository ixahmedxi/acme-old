import { z } from 'zod';

import { protectedProcedure } from '../../middlewares/auth.middleware';
import { createRouter, publicProcedure } from '../../utils/trpc';

export const exampleRouter = createRouter({
  hello: publicProcedure
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
  secret: protectedProcedure.query(
    () => "You're seeing this because you're logged in",
  ),
});
