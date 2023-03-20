import { SignOutButton } from '@clerk/nextjs';
import { NextPage } from 'next';

const Dashboard: NextPage = () => {
  return (
    <main>
      <h1>Signed in!</h1>
      <SignOutButton />
    </main>
  );
};

export default Dashboard;
