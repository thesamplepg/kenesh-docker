import MainDeputies from "@/components/MainPage/Deputies";
import MainHero from "@/components/MainPage/Hero";
import About from "@/components/MainPage/About";
import News from "@/components/MainPage/News";
import { fetchStrapi } from "@/utils/fetch";
import { getMessages } from "next-intl/server";

export default async function Page({ params }) {
  const res = await fetchStrapi(
    `main-page?locale=${params.locale}&populate=deputies.avatar&populate=deputies.fraction&populate=featured_news.images&populate=featured_news.thumbnail`
  );

  const data = res.data.attributes;
  const messages = await getMessages();

  return (
    <main>
      <MainHero news={data.featured_news.data} />
      <About />
      <News messages={messages.MainPage} locale={params.locale} />
      <MainDeputies deputies={data.deputies.data} />
    </main>
  );
}
