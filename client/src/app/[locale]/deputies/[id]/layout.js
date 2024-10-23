import { fetchStrapi } from "@/utils/fetch";
import PageInfoSection from "@/components/PageInfoSection";
import DeputyMainInfo from "../../../../components/DeputyInfo";
import PageNavbar from "../../../../components/UI/PageNavbar";
import { getTranslations } from "next-intl/server";

import "./index.scss";

const getMenu = (t) => [
  { title: t("menu.about"), path: "" },
  { title: t("menu.news"), path: "/news" },
  { title: t("menu.bills"), path: "/bills" },
  // { title: t("menu.media"), path: "/media" },
];

async function DeputyLayout({ params, children }) {
  const t = await getTranslations("Deputies");
  const menu = getMenu(t);

  const id = params.id;
  const res = await fetchStrapi(
    `deputies/${id}?locale=${params.locale}&populate=*`
  );
  const { name, avatar, socialLinks, phone, mail, fraction } =
    res.data.attributes;

  return (
    <>
      <PageInfoSection
        title={name}
        path={[{ path: "/deputies", title: "Депутаты" }]}
      />
      <main className="page-deputy">
        <div className="section mx-auto container">
          <section className="deputy-info">
            <DeputyMainInfo
              name={name}
              group={fraction}
              avatar={avatar}
              social={socialLinks[0]}
              phone={phone}
              mail={mail}
            />
          </section>
          <section className="deputy-content">
            <PageNavbar
              menu={menu.map((item) => ({
                ...item,
                path: `/deputies/${id}${item.path}`,
              }))}
            />
            <div className="content">{children}</div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DeputyLayout;
