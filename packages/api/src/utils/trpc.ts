import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

import { Context } from './context';

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createRouter = t.router;
export const publicProcedure = t.procedure;
