import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import "./index.scss";

function Fractions({ data }) {
  const t = useTranslations("Widgets");
  const fractions = data.map((fraction) => {
    const data = fraction.attributes;
    const imageUrl =
      process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL + data.image.data.attributes.url;

    return (
      <li className="fractions-item" key={fraction.id}>
        <Link href={`/deputies?fraction=${fraction.id}`}>
          <img loading="lazy" src={imageUrl} alt="document" />
          <div className="info">
            <p>Парламентская фракция</p>
            <h3>{data.name}</h3>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="widget-fractions">
      <h2>{t("fractions")}</h2>
      <ul className="fractions-item-list">{fractions}</ul>
      <button className="bills-button">
        <Link href="/bills">Больше</Link>
      </button>
    </div>
  );
}

export default Fractions;
