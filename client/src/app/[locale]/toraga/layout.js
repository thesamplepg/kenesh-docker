import { fetchStrapi } from "@/utils/fetch";
import PageInfoSection from "@/components/PageInfoSection";
import DeputyMainInfo from "@/components/DeputyInfo";

import "./index.scss";
import PageNavbar from "@/components/UI/PageNavbar";
import { getTranslations } from "next-intl/server";

const getMenu = (t) => [
  { title: t("menu.about"), path: "/toraga" },
  { title: t("menu.news"), path: "/toraga/news" },
  // { title: t("menu.media"), path: "/toraga/media" },
];

async function ToroagaLayout({ children, params }) {
  const t = await getTranslations("Deputies");
  const menu = getMenu(t);

  const res = await fetchStrapi(`toraga?locale=${params.locale}&populate=*`);

  const { name, avatar } = res.data.attributes;

  return (
    <>
      <PageInfoSection
        title={name}
        path={[{ path: "/toraga", title: "Торага" }]}
      />
      <main className="page-deputy">
        <div className="section mx-auto container">
          <section className="deputy-info">
            <DeputyMainInfo
              name={name}
              avatar={avatar}
              text="Торага Жогорку Кенеша Кыргызской Республики"
            />
          </section>
          <section className="deputy-content">
            <PageNavbar menu={menu} />
            <div className="content">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
}

export default ToroagaLayout;
