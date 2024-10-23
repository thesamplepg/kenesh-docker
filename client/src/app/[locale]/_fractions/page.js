import { fetchStrapi } from "@/utils/fetch";

import "./index.scss";
import NoContent from "@/components/NoContent";
import PageInfoSection from "@/components/PageInfoSection";
import FractionsList from "./FractionsList";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("fractions.title"),
    description: t("fractions.description"),
  };
};

async function Fractions({ params }) {
  const res = await fetchStrapi(`fractions?locale=${params.locale}&populate=*`);

  return (
    <>
      <PageInfoSection
        title="Фракции"
        path={[{ path: "/fractions", title: "Фракции" }]}
      />
      <main className="section fractions-page">
        <div className="container mx-auto">
          <NoContent show={res}>
            {res && <FractionsList data={res.data} />}
          </NoContent>
        </div>
      </main>
    </>
  );
}

export default Fractions;
