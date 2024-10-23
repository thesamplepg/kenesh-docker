import PageInfoSection from "@/components/PageInfoSection";
import { fetchStrapi } from "@/utils/fetch";
import Pagination from "@/components/UI/Pagination";
import NoContent from "@/components/NoContent";
import DeputiesList from "@/components/DeputiesList";

import "./index.scss";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("deputies.title"),
    description: t("deputies.description"),
  };
};

async function Deputies({ searchParams, params }) {
  const page = searchParams.page || 1;
  const quanitity = 16;
  const fraction = searchParams.fraction
    ? `filters[fraction][id]=${searchParams.fraction}`
    : "";

  const res = await fetchStrapi(
    `deputies?locale=${params.locale}&pagination[page]=${page}&pagination[pageSize]=${quanitity}&${fraction}&fields[0]=name&populate=avatar&populate=fraction`
  );

  const totalDeputies = res ? res.meta.pagination.total : 0;

  return (
    <>
      <PageInfoSection
        title={"Депутаты"}
        path={[{ path: "/deputies", title: "Депутаты" }]}
      />
      <main className="page-deputies">
        <div className="container mx-auto section">
          <NoContent show={res}>
            {res && <DeputiesList data={res.data} />}
          </NoContent>
          <Pagination
            pages={Math.ceil(totalDeputies / quanitity)}
            active={+page}
          />
        </div>
      </main>
    </>
  );
}

export default Deputies;
