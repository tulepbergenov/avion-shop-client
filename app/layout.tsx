import { type Viewport, type Metadata } from "next";
import "@/app/styles/index.css";
import { appTitle } from "@/shared/libs";

export const metadata: Metadata = {
  title: appTitle(),
  description: "The furniture brand for the future, with timeless designs",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
