import NewsPostMain from "../NewsPostMain";

import "../index.scss";

function NewsList({ news }) {
  const list = news.map((item) => {
    return (
      <li className="main-page__news-item" key={item.id}>
        <NewsPostMain data={item} />
      </li>
    );
  });

  return <ul className="main-page__news-list">{list}</ul>;
}

export default NewsList;
