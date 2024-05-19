import { cn } from "@/shared/libs";
import { Container } from "@/shared/ui-kit";
import Link from "next/link";
import { IFooter } from "./Footer.type";

const currentYear = new Date().getFullYear();

export const Footer = ({ className, ...props }: IFooter) => {
  return (
    <footer
      className={cn("bg-[#2A254B] text-[14px] text-white", className)}
      {...props}
    >
      <Container>
        <div>
          <div className="pb-[48px] pt-[58px]"></div>
          <div className="flex items-center justify-between border-t border-t-[#4E4D93] py-[24px]">
            <p>
              Copyright {currentYear}{" "}
              <Link href={"/"} prefetch={false}>
                Avion
              </Link>{" "}
              LTD
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
