import { NextPage } from 'next';

import { prisma } from '@acme/database';

const Home: NextPage = () => {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
};

export const getServerSideProps = async () => {
  const examples = await prisma.example.findMany();

  console.log(examples);

  return {
    props: {},
  };
};

export default Home;
