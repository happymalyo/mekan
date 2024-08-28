import { Menu } from "@/types";
export interface IProps extends Menu {
  expandable: boolean;
  dropDown?: Menu[];
}

const NavItem = ({ label, link }: IProps) => {
  return (
    <nav className="flex gap-6 hidden lg:block">
      <a href={link} className="flex items-center text-sm font-medium">
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </a>
    </nav>
  );
};

export default NavItem;
