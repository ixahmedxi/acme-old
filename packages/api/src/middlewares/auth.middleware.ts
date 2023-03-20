import { TRPCError } from '@trpc/server';

import { t } from '../utils/trpc';

const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth?.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      auth: ctx.auth,
    },
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
