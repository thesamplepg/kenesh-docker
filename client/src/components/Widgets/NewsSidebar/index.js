import { fetchStrapi } from "@/utils/fetch";
import NewsPost from "../../NewsPost";

import "./index.scss";

async function NewsSidebar() {
  const res = await fetchStrapi("main-page?populate=featured_news.thumbnail");
  const news = res.data.attributes.featured_news.data.map((post) => {
    return (
      <li key={post.id}>
        <NewsPost data={post} />
      </li>
    );
  });

  return (
    <div className="widget-news-sidebar">
      <ul className="widget-news-sidebar-list">{news}</ul>
    </div>
  );
}

export default NewsSidebar;
