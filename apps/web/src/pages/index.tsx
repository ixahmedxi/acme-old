import { SignInButton } from '@clerk/nextjs';
import { NextPage } from 'next';

import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.example.examples.useQuery();

  return (
    <main>
      <h1>Home page</h1>
      <SignInButton redirectUrl="/dashboard" />
      {JSON.stringify(data)}
    </main>
  );
};

export default Home;
