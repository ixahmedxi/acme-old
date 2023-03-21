import { SignInButton } from '@clerk/nextjs';
import { NextPage } from 'next';

import { Button } from '@acme/ui';

import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.example.examples.useQuery();

  return (
    <main>
      <h1>Home page</h1>
      <SignInButton redirectUrl="/dashboard" />
      {JSON.stringify(data)}
      <Button />
    </main>
  );
};

export default Home;
