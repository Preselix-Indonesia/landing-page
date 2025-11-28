"use client";

import type { FC, ReactNode } from "react";
import { Button as ShadcnButton, type ShadcnButtonProps } from "./ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ShadcnButtonProps {
  isLoading?: boolean;
}

const isIconOnly = (children: ReactNode) => {
  if (!children) return false;

  // If it's a single React element (e.g. <Plus />)
  if (typeof children === "object" && !Array.isArray(children)) return true;

  // If it's an array with only 1 element which is a React element
  if (Array.isArray(children) && children.length === 1) {
    return typeof children[0] === "object";
  }

  return false;
};

export const Button: FC<ButtonProps> = ({
  children,
  isLoading,
  className = "",
  ...props
}) => {
  const iconOnly = isIconOnly(children);

  // detect jika user kasih custom width (w-*, min-w-*, max-w-*)
  const userSetWidth = /(?:^|\s)(w-|min-w-|max-w-)/.test(className);

  return (
    <ShadcnButton
      {...props}
      className={cn(
        "transition-all duration-100 ease-out active:scale-95",
        "hover:scale-[.98] hover:shadow-sm/5",

        // apply min-width only if:
        // - NOT iconOnly
        // - user tidak kasih custom width
        !iconOnly && !userSetWidth && "min-w-28 sm:min-w-32",

        // Padding difference
        iconOnly ? "p-2" : "px-4 py-2",

        // Loading spinner stabilization
        isLoading && "relative",

        className
      )}
    >
      {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : children}
    </ShadcnButton>
  );
};
