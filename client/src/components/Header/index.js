import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import { useTranslations } from "next-intl";

import "./index.scss";

const Header = ({ menus }) => {
  const t = useTranslations("UI");

  const broadcast = {
    button: t("broadcast.button"),
    button_off: t("broadcast.button_off"),
  };

  return (
    <header className="main-header-component white text-sm">
      <Navbar menus={menus} broadcast={broadcast} />
      <NavbarMobile menus={menus} broadcast={broadcast} />
    </header>
  );
};

export default Header;
