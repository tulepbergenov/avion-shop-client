import { appTitle } from "@/shared/libs";
import { Container } from "@/shared/ui-kit";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Not found"),
};

const NotFound = () => {
  return (
    <section>
      <Container>
        <header>
          <h1>Not found</h1>
        </header>
      </Container>
    </section>
  );
};

export default NotFound;
