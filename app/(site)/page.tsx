import { appTitle } from "@/shared/libs";
import { Container } from "@/shared/ui-kit";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle(),
};

const Home = () => {
  return (
    <section>
      <Container>
        <header>
          <h1>Home</h1>
        </header>
      </Container>
    </section>
  );
};

export default Home;
