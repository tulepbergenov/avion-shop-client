import { cn } from "@/shared/libs";
import { forwardRef } from "react";
import { IContainer } from "./Container.type";

export const Container = forwardRef<HTMLDivElement, IContainer>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn("container 2xl:max-w-[1328px]", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Container.displayName = "Container";
