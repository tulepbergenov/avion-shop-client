import { appTitle } from "@/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <header>
        <h1>Home</h1>
      </header>
    </section>
  );
};

export default Home;
