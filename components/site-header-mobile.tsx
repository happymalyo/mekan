"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { navList } from "@/components/Navbar/NavList/NavList";
import { IProps as NavItemProps } from "@/components/Navbar/NavItem";
import { motion, useCycle } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

type MenuItemWithSubMenuProps = {
  item: NavItemProps;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const locale = "/" + pathname?.split("/")[1];

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full lg:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-background"
        variants={sidebar}
      />
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-3 px-10 py-16 max-h-screen overflow-y-auto"
      >
        {navList.map((item, idx) => {
          const isLastItem = idx === navList.length - 1; // Check if it's the last item

          return (
            <div key={idx}>
              {item.dropDown ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.link}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${
                      locale + "" + item.link === pathname ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && (
                <MenuItem className="my-3 h-px w-full bg-gray-300" />
              )}
            </div>
          );
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
      <motion.div
        variants={fadeInVariants}
        className="absolute bottom-0 left-0 w-full bg-background flex flex-row justify-center items-center space-x-10 py-4 z-50"
      >
        <div className="langage">
          <span className="text-slate-600 hover:underline cursor-pointer">
            English
          </span>
          <span className="text-slate-600"> | </span>
          <span className="text-slate-600 hover:underline cursor-pointer ">
            Français
          </span>
        </div>
        <ThemeToggle />
      </motion.div>
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-10 top-[45px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23" className="text-gray-800">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(47, 100%, 56%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const locale = "/" + pathname?.split("/")[1];

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`${pathname.includes(item.link) ? "font-bold" : ""}`}
            >
              <Link
                href={item.link}
                onClick={() => toggleOpen()}
                className={` ${item.link === pathname ? "font-bold" : ""}`}
              >
                {item.label}
              </Link>
            </span>
            <div className={`${subMenuOpen && "rotate-180"}`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.dropDown?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.link}
                    onClick={() => toggleOpen()}
                    className={`hover:text-secondary-foreground ${
                      locale + "" + subItem.link === pathname
                        ? "font-bold text-3xl"
                        : ""
                    }`}
                  >
                    {subItem.label}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const fadeInVariants = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
