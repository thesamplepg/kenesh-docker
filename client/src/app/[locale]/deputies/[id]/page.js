import HtmlMarkdown from "@/components/UI/HtmlMarkdown";
import "./index.scss";
import { fetchStrapi } from "@/utils/fetch";

async function About({ params }) {
  const res = await fetchStrapi(
    `deputies/${params.id}?locale=${params.locale}&populate=*`
  );

  return (
    <section className="page-deputy__about">
      <HtmlMarkdown content={res.data.attributes.content} />
    </section>
  );
}

export default About;
