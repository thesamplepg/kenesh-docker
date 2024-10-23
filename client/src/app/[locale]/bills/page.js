import { fetchStrapi } from "@/utils/fetch";
import PageInfoSection from "@/components/PageInfoSection";
import Table from "@/components/UI/Table";
import Tr from "@/components/UI/Table/tr";
import Pagination from "@/components/UI/Pagination";
import { getTranslations } from "next-intl/server";

import "./index.scss";
import NoContent from "@/components/NoContent";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("bills.title"),
    description: t("bills.description"),
  };
};

async function Bills({ searchParams, params }) {
  const t = await getTranslations("Bills");

  const tableTitles = [
    t("table.register_number"),
    t("table.title"),
    t("table.deputies"),
    t("table.register_date"),
    t("table.state"),
  ];

  const page = searchParams.page || 1;
  const billsQuantityPerPage = 25;
  const paginationParams = `pagination[page]=${page}&pagination[pageSize]=${billsQuantityPerPage}`;
  const res = await fetchStrapi(
    `bills?locale=${params.locale}&${paginationParams}&populate=*`
  );
  const totalBills = res ? res.meta.pagination.total : 0;

  const tableData =
    res &&
    res.data.map((item) => {
      const { register_number, register_date, title, state } = item.attributes;

      const deputies = item.attributes.deputies.data
        .map((deputy) => {
          return deputy.attributes.name;
        })
        .join(" , ");

      return (
        <Tr key={item.id} link={`/bills/${item.id}`}>
          <td>{register_number}</td>
          <td>{title}</td>
          <td>{deputies}</td>
          <td>{new Date(register_date).toLocaleDateString("ru")}</td>
          <td>{state}</td>
        </Tr>
      );
    });

  return (
    <>
      <PageInfoSection
        title="Законопроекты"
        path={[{ title: "Законопроекты", path: "/bills" }]}
      />
      <main className="page-bills">
        <div className="container section mx-auto">
          <div className="bills-table">
            <NoContent show={res}>
              {res ? <Table titles={tableTitles}>{tableData}</Table> : null}
            </NoContent>
          </div>
          <Pagination
            pages={Math.ceil(totalBills / billsQuantityPerPage)}
            active={page}
          />
        </div>
      </main>
    </>
  );
}

export default Bills;
