import "@/app/styles/index.css";
import { appTitle } from "@/shared/libs";
import { Footer } from "@/widgets";
import { type Metadata, type Viewport } from "next";

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
    <html className="h-full !scroll-smooth" lang="en">
      <body className="rendering-speed h-full bg-white text-[16px] font-normal leading-[150%] text-black antialiased">
        <div className="flex min-h-full flex-col">
          <main className="flex-auto" id="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
