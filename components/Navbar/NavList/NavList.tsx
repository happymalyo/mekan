import { IProps as NavItemProps } from "../NavItem";
import { siteMap } from "@/constants";
import { servicesList } from "./ServicesList";

export const navList: NavItemProps[] = [
  {
    label: "Home",
    link: siteMap.HOME,
    expandable: false,
  },
  {
    label: "About",
    link: siteMap.ABOUT,
    expandable: false,
  },
  {
    label: "Services",
    link: siteMap.SERVICES,
    expandable: true,
    dropDown: servicesList,
  },
  {
    label: "Contact",
    link: siteMap.CONTACT,
    expandable: false,
  },
  {
    label: "Blog",
    link: siteMap.BLOG,
    expandable: false,
  },
  {
    label: "Career",
    link: siteMap.CAREER,
    expandable: false,
  },
  {
    label: "News",
    link: siteMap.NEWS,
    expandable: false,
  },
];
