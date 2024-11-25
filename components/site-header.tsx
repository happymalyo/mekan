"use client";

import React, { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import useImageTheme from "@/hooks/use-image-theme";
import { cn } from "@/lib/utils";
import useScroll from "@/hooks/use-scroll";

const Header = () => {
  const src: any = useImageTheme({
    darkName: "/logo-mekan.png",
    lightName: "/logo-mekan.png",
  });
  const scrolled = useScroll(5);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all mt-[20px]",
        {
          "bg-background/75 backdrop-blur-lg py-[20px]": scrolled,
        }
      )}
    >
      <div className="flex w-full h-16 items-center max-w-7xl mx-auto px-2 justify-between sm:space-x-0">
        <div>
          <Image src={src} alt="Mëkan logo" width={160} height={40} />
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Navbar />
          <nav className="hidden lg:block flex items-center space-x-1">
            <Button
              asChild
              className="dark:bg-secondary/20 dark:text-secondary-foreground"
            >
              <Link href="/">New Project</Link>
            </Button>
          </nav>
          <button className="hidden lg:block">EN</button>
          <ThemeToggle className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default Header;
