import Image from "next/image";
import { Link } from "@/navigation";

import "./index.scss";
import LangSwitcher from "@/components/UI/LangSwitcher";
import BroadcastButton from "@/components/UI/BroadcastButton";
import { renderNestedMenu } from "../utils";

const Navbar = ({ menus, broadcast }) => {
  const menuItems = menus.map((item) => {
    const data = item.attributes;
    const nestedMenu = renderNestedMenu(item.attributes.children);

    return (
      <li key={data.title} className="navbar-item">
        <Link href={data.url}>{data.title}</Link>
        {nestedMenu}
      </li>
    );
  });

  return (
    <nav className="main-header-component__navbar container mx-auto">
      <Link href="/">
        <Image width={60} height={60} src="/logo.png" alt="logo" />
      </Link>
      <div className="flex">
        <ul className="navbar-menu">{menuItems}</ul>
        <div className="flex">
          <LangSwitcher />
          <BroadcastButton
            title={broadcast.button}
            off={broadcast.button_off}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
