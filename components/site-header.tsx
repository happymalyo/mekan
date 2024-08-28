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
import { motion } from "framer-motion";
import { servicesList } from "@/components/Navbar/NavList/ServicesList";

const headerHeight = {
  open: {
    clipPath: "inset(0 0 0 0)",
    paddingBottom: "100px",
  },
  closed: {
    clipPath: "inset(0 0 200px 0)",
  },
};

const Header = () => {
  const src: any = useImageTheme({
    darkName: "/logo-dark-mode.svg",
    lightName: "/logo-light-mode.svg",
  });
  const scrolled = useScroll(5);
  const containerRef = useRef(null);
  const [isOpen, toggleOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className={cn(
        "sticky inset-x-0 top-0 z-30 w-full transition-all mt-[20px]",
        {
          "bg-background/75 backdrop-blur-lg py-[20px]": scrolled,
        }
      )}
    >
      <div className="flex w-full h-16 items-center max-w-6xl mx-auto p-6 justify-between sm:space-x-0">
        <div>
          <Image src={src} alt="SmartPredict logo" width={160} height={40} />
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Navbar toggleOpen={toggleOpen} />
          <nav className="hidden lg:block flex items-center space-x-1">
            <Button
              asChild
              className="dark:bg-secondary/20 dark:text-secondary-foreground"
            >
              <Link href="/">New SmartProject</Link>
            </Button>
          </nav>
          <button className="hidden lg:block">EN</button>
          <ThemeToggle className="hidden lg:block" />
        </div>
      </div>
      <motion.div
        variants={headerHeight}
        className="w-full absolute transition-all inset-x-0 top-[102px]w-full bg-background/85 backdrop-blur-lg flex flex-col items-start z-20"
        onMouseLeave={() => toggleOpen((isOpen) => !isOpen)}
      >
        <div className="container max-w-6xl pl-96 pt-10 hidden lg:block">
          {servicesList.map((service, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-dark-foreground">{service.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
