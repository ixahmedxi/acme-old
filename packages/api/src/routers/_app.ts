import { createRouter } from '../utils/trpc';
import { exampleRouter } from './example/example.router';

export const appRouter = createRouter({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
