import PageInfoSection from "@/components/PageInfoSection";
import { fetchStrapi } from "@/utils/fetch";
import NoContent from "@/components/NoContent";
import DeputiesList from "@/components/DeputiesList";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("chairmans.title"),
    description: t("chairmans.description"),
  };
};

async function Chairmans({ params }) {
  const res = await fetchStrapi(
    `chairman?locale=${params.locale}&populate=deputies.avatar&populate=deputies.fraction`,
    "deputies"
  );

  return (
    <>
      <PageInfoSection
        title={"Заместители Торага"}
        path={[{ path: "/chairmans", title: "Заместители Торага" }]}
      />
      <main className="chairmans-apge">
        <div className="container mx-auto section">
          <NoContent show={res}>
            {res && <DeputiesList data={res.data.attributes.deputies.data} />}
          </NoContent>
        </div>
      </main>
    </>
  );
}

export default Chairmans;
