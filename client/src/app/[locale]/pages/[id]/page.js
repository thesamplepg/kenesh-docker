import PageInfoSection from "@/components/PageInfoSection";
import { fetchStrapi } from "@/utils/fetch";
import { redirect } from "next/navigation";
import Content from "./Content";

import "./index.scss";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("pages.title"),
    description: t("pages.description"),
  };
};

async function Page({ params }) {
  const res = await fetchStrapi(
    `page/${params.id}?locale=${params.locale}&fields[0]=title&fields[1]=date`
  );

  if (!res) return redirect("/404");

  const { title } = res.data.attributes;

  return (
    <>
      <PageInfoSection
        title={title}
        path={[{ title: "Страницы", path: "/pages" + res.data.id }]}
      />
      <main className="page">
        <div className="section container mx-auto">
          <Content pageId={res.data.id} />
        </div>
      </main>
    </>
  );
}

export default Page;
