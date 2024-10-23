import { Link } from "@/navigation";

import "./index.scss";

function Fraction({ data }) {
  const imageUrl =
    "http://127.0.0.1:1337" + data.attributes.image.data.attributes.url;

  return (
    <div className="fraction-component drop-shadow-lg">
      <Link href={`/deputies?fraction=${data.id}`}>
        <img src={imageUrl} loading="lazy" alt="Фракции" />
        <div className="info">
          <p>Политическая Фракция</p>
          <h2>{data.attributes.name}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Fraction;
