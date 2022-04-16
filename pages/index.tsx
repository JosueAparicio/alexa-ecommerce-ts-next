import type { NextPage } from "next";

import HomePage from "../views/Home";
import PageLayout from "../layouts/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomePage />
    </PageLayout>
  );
};

export default Home;
