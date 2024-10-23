import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import "./index.scss";

function Bills({ data }) {
  const t = useTranslations("Widgets");
  const bills = data.map((bill) => {
    const data = bill.attributes;

    return (
      <li className="bills-item drop-shadow" key={bill.id}>
        <Link href={`/bills/${bill.id}`}>
          <h3>{data.title}</h3>
          <p>{new Date(data.register_date).toLocaleDateString("ru")}</p>
          <img src="/document.png" alt="document" />
        </Link>
      </li>
    );
  });

  return (
    <div className="widget-bills">
      <h2>{t("bills")}</h2>
      <ul className="bills-list">{bills}</ul>
      <button className="bills-button">
        <Link href="/bills">Больше</Link>
      </button>
    </div>
  );
}

export default Bills;
