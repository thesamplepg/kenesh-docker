import NewsPost from "@/components/NewsPost";

import "./index.scss";

function NewsList({ news }) {
  const list = news.map((item) => {
    return (
      <li key={item.id}>
        <NewsPost data={item} autoWidth={true} />
      </li>
    );
  });

  return <ul className="news-page__news-list">{list}</ul>;
}

export default NewsList;
