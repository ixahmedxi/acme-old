import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from '@clerk/nextjs/dist/api';
import { getAuth } from '@clerk/nextjs/server';
import { inferAsyncReturnType } from '@trpc/server';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

import { prisma } from '@acme/database';

interface AuthContext {
  auth?: SignedInAuthObject | SignedOutAuthObject;
}

export const createContextInner = ({ auth }: AuthContext) => {
  return {
    auth,
    prisma,
  };
};

export const createContext = (opts: CreateNextContextOptions) => {
  return createContextInner({ auth: getAuth(opts.req) });
};

export type Context = inferAsyncReturnType<typeof createContext>;
