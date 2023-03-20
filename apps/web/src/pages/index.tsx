import { NextPage } from 'next';

import { trpc } from '@/utils/trpc';

const Home: NextPage = () => {
  const { data } = trpc.greeting.examples.useQuery();

  return (
    <main>
      <h1>Home page</h1>
      {JSON.stringify(data)}
    </main>
  );
};

export default Home;
