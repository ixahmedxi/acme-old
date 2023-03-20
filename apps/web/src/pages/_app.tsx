import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';

import { trpc } from '@/utils/trpc';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default trpc.withTRPC(App);
