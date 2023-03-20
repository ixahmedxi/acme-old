import { createNextApiHandler } from '@trpc/server/adapters/next';

import { appRouter, createContext } from '@acme/api';

export default createNextApiHandler({
  router: appRouter,
  createContext,
});
