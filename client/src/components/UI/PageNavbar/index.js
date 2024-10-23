"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

import "./index.scss";

function PageNavbar({ menu }) {
  const hostname = usePathname();

  const menuItems = menu.map((item) => {
    return (
      <li
        className={`menu-item ${
          item.path == hostname ? "menu-item--active" : ""
        }`}
        key={item.title}
      >
        <Link href={item.path}>{item.title}</Link>
      </li>
    );
  });

  return (
    <nav className="ui-page-navbar">
      <ul className="menu-list">{menuItems}</ul>
    </nav>
  );
}

export default PageNavbar;
