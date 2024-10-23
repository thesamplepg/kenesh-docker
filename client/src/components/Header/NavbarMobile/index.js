"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "@/navigation";
import LangSwitcher from "@/components/UI/LangSwitcher";
import BroadcastButton from "@/components/UI/BroadcastButton";

import "./index.scss";
import { renderNestedMenu } from "../utils";

function NavbarMobile({ menus, broadcast }) {
  const [isOpen, setOpen] = useState(false);
  const navbarMenu = useRef();

  const menuItems = menus.map((item) => {
    const data = item.attributes;
    const nestedMenu = renderNestedMenu(data.children);

    return (
      <li
        key={data.order}
        className="navbar-item mx-5 text-slate-600 font-medium py-2"
      >
        <Link href={data.url} onClick={() => setOpen(false)}>
          {data.title}
        </Link>
        {nestedMenu}
      </li>
    );
  });

  const documentClickHandle = () => {
    setOpen(false);

    document.removeEventListener("click", documentClickHandle);
  };

  useEffect(() => {
    if (isOpen) document.addEventListener("click", documentClickHandle);
  }, [isOpen]);

  return (
    <nav className="main-header-component__navbar-mobile">
      <div className="container mx-auto">
        <Link className="navbar-logo" href="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <button className="navbar-toggle" onClick={() => setOpen(!isOpen)}>
          <img src="/menu-bar.png" alt="menu" />
        </button>
      </div>
      <div
        ref={navbarMenu}
        className={`navbar-menu-container`}
        style={{ transform: `translateY(${isOpen ? 0 : -100}%)` }}
      >
        <div className="navbar-buttons">
          <LangSwitcher />
          <BroadcastButton
            title={broadcast.button}
            off={broadcast.button_off}
          />
        </div>
        <ul className="navbar-menu">{menuItems}</ul>
      </div>
    </nav>
  );
}

export default NavbarMobile;
