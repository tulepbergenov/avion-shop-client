import { appTitle } from "@/shared/libs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: appTitle("Not found"),
};

const NotFound = () => {
  return (
    <section>
      <header>
        <h1>Not found</h1>
      </header>
    </section>
  );
};

export default NotFound;
