import PageInfoSection from "@/components/PageInfoSection";
import { fetchStrapi } from "@/utils/fetch";
import DataBlock from "@/components/UI/InlineDataBlock";
import AnotherResources from "@/components/Widgets/AnotherResources";
import { getTranslations } from "next-intl/server";
import FilesList from "@/components/UI/FilesList";

async function Bill({ params }) {
  const t = await getTranslations("Bills");

  const id = params.id;

  const res = await fetchStrapi(
    `bills/${id}?locale=${params.locale}&populate=*`
  );
  const data = res.data.attributes;

  const deputies = data.deputies.data
    .map((deputy) => {
      return deputy.attributes.name;
    })
    .join(" , ");

  return (
    <>
      <PageInfoSection
        title={data.title}
        path={[{ title: "Законопроекты", path: "/bills" }]}
      />
      <main className="bill-page">
        <div className="container section mx-auto">
          <div className="bill-info">
            <DataBlock title={t("bill.register_number")}>
              {data.register_number}
            </DataBlock>
            <DataBlock title={t("bill.register_date")}>
              {new Date(data.register_date).toLocaleDateString("ru")}
            </DataBlock>
            <DataBlock title={t("bill.deputies")}>{deputies}</DataBlock>
            <DataBlock title={t("bill.law_documents")}>
              <FilesList files={data.law_documents} />
            </DataBlock>
            <DataBlock title={t("bill.attached_documents")}>
              <FilesList files={data.attached_documents} />
            </DataBlock>
            <DataBlock title={t("bill.state")}>{data.state}</DataBlock>
          </div>
        </div>
      </main>
    </>
  );
}

export default Bill;
