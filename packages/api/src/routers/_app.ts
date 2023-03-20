import { createRouter } from '../utils/trpc';
import { greetingRouter } from './greeting/greeting.router';

export const appRouter = createRouter({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;
