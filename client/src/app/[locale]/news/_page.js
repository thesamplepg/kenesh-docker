import { fetchStrapi } from "@/utils/fetch";
import PageInfoSection from "@/components/PageInfoSection";

import "./index.scss";
import Sidebar from "../../../components/Widgets/InfoSidebar";
import NewsList from "./NewList";
import Pagination from "@/components/UI/Pagination";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("news.title"),
    description: t("news.description"),
  };
};

async function News({ searchParams, params }) {
  const page = searchParams.page || 1;
  const quantityPerPage = 10;
  const paginationParams = `pagination[page]=${page}&pagination[pageSize]=${quantityPerPage}`;
  const res = await fetchStrapi(
    `news?locale=${params.locale}&${paginationParams}&populate=thumbnail`
  );

  return (
    <>
      <PageInfoSection
        title="Новости"
        path={[{ title: "Новости", path: "/news" }]}
      />
      <main className="page-news">
        <div className="container section mx-auto">
          <NewsList news={res.data} />
          <div className="sidebar">
            <Sidebar />
          </div>
        </div>
      </main>
    </>
  );
}

export default News;
