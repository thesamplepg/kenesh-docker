import NewsPost from "@/components/NewsPost";
import { fetchStrapi } from "@/utils/fetch";

import "./index.scss";

async function News({ params }) {
  const res = await fetchStrapi(
    `deputies/${params.id}?locale=${params.locale}&populate=news.thumbnail`,
    "news"
  );

  if (!res) return;

  const news = res.data.attributes.news.data.map((item) => {
    return (
      <li className="page-deputy__news-item" key={item.id}>
        <NewsPost data={item} />
      </li>
    );
  });

  return (
    <section className="page-deputy__news">
      <ul className="page-deputy__news-list">{news}</ul>
    </section>
  );
}

export default News;
