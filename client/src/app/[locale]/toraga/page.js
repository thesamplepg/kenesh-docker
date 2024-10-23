import HtmlMarkdown from "@/components/UI/HtmlMarkdown";
import "./index.scss";
import { fetchStrapi } from "@/utils/fetch";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("toraga.title"),
    description: t("toraga.description"),
  };
};

async function About({ params }) {
  const res = await fetchStrapi(`toraga?locale=${params.locale}&populate=*`);

  return (
    <section className="page-deputy__about">
      <HtmlMarkdown content={res.data.attributes.content} />
    </section>
  );
}

export default About;
