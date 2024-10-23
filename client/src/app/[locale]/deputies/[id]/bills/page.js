import { fetchStrapi } from "@/utils/fetch";
import { Link } from "@/navigation";

import "./index.scss";

async function News({ params }) {
  const res = await fetchStrapi(
    `deputies/${params.id}?locale=${params.locale}&populate=*`,
    "bills"
  );

  if (!res) return;

  const bills = res.data.attributes.bills.data.map((item) => {
    return (
      <li className="page-deputy__bills-item" key={item.id}>
        <Link href={`/bills/${item.id}`}>{item.attributes.title}</Link>
      </li>
    );
  });

  return (
    <section className="page-deputy__bills">
      <ul className="page-deputy__bills-list">{bills}</ul>
    </section>
  );
}

export default News;
