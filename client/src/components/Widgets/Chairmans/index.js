import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import "./index.scss";

function Chairmans({ data }) {
  const t = useTranslations("Widgets");
  const chairmans = data.map((chairman) => {
    const data = chairman.attributes;
    const imageUrl =
      process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL +
      data.avatar.data.attributes.url;

    return (
      <li className="chairmans-item" key={chairman.id}>
        <Link href={`/deputies/${chairman.id}`}>
          <img src={imageUrl} loading="lazy" alt="document" />
          <div className="info">
            {/* <p></p> */}
            <h3>{data.name}</h3>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="widget-chairmans">
      <h2>{t("chairmans")}</h2>
      <ul className="chairmans-item-list">{chairmans}</ul>
      <button className="bills-button">
        <Link href="/bills">Больше</Link>
      </button>
    </div>
  );
}

export default Chairmans;
