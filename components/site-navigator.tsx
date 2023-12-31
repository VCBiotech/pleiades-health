import NavLinks from "./nav-links";
import { ModeToggle } from "@/components/theme-toggler";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SiteNavigator({
  brand,
  links,
}: {
  brand: {
    name: string | null;
    logo: string | null;
    slogan: string | null;
  };
  links: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container grid grid-cols-3 h-20 w-full items-center p-3 sm:px-6">
        <Link href="/" className="">
          <div className="relative flex w-48 flex-row items-center space-x-2 align-baseline md:mx-0">
            <Image
              src={brand.logo ?? "/logo.svg"}
              alt={""}
              height="500"
              width="500"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <span
                className={cn(
                  "from-primary to-muted inline-block whitespace-nowrap bg-gradient-to-tr bg-clip-text",
                  "align-baseline text-xl uppercase tracking-wide text-transparent",
                )}
              >
                {brand.name}
              </span>
              <span className="whitespace-nowrap text-xs text-muted-foreground">
                {brand.slogan}
              </span>
            </div>
          </div>
        </Link>

        <div className="hidden lg:inline-flex lg:gap-3 mx-auto">
          <NavLinks links={links} />
        </div>
        <div className="hidden lg:inline-flex lg:gap-3 justify-end">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "outline" }), "px-4")}
          >
            Contacto
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
