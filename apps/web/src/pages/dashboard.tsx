import { SignOutButton } from '@clerk/nextjs';
import { NextPage } from 'next';

import { trpc } from '@/utils/trpc';

const Dashboard: NextPage = () => {
  const { data } = trpc.example.secret.useQuery();

  return (
    <main>
      <h1>{data}</h1>
      <SignOutButton />
    </main>
  );
};

export default Dashboard;
