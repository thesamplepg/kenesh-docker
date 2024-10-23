import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import "./index.scss";

function Footer({ menus }) {
  const t = useTranslations("Footer");

  const menuItems = menus.map((item) => {
    const data = item.attributes;

    return (
      <li key={data.title} className="menu-item">
        <Link href={data.url}>{data.title}</Link>
      </li>
    );
  });

  return (
    <footer className="main-footer-component section">
      <div className="container mx-auto">
        <section className="about">
          <h2>{t("about.title")}</h2>
          <p>{t("about.description")}</p>
        </section>
        <section className="pages">
          <h3>{t("pages.title")}</h3>
          <p>
            <Link href="/pages/1">{t("pages.constitution")}</Link>
          </p>
          <p>
            <Link href="/pages/4">{t("pages.parlament_history")}</Link>
          </p>
        </section>
        <section className="menus">
          <h3>Меню</h3>
          <ul className="menus-list">{menuItems}</ul>
        </section>
        <section className="contacts">
          <h3>{t("contacts.title")}</h3>
          <p>+996 999 888 222</p>
          <p>baytikkenesh@mail.ru</p>
          <p>{t("contacts.address")}</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
