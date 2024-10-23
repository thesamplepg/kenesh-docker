import { Link } from "@/navigation";

import "./index.scss";
import NewsPost from "@/components/NewsPost";

function PostsList({ data }) {
  const items = data.map((item) => {
    return (
      <li className="post" key={item.id}>
        <NewsPost data={item} />
      </li>
    );
  });

  return (
    <section className="main-page__hero-posts-list">
      <ul className="list">{items}</ul>
    </section>
  );
}

export default PostsList;
