import { Link } from "@/navigation";

import "./index.scss";
import { getImage } from "@/utils/index";

function Fraction({ data }) {
  const imageUrl = getImage() + data.attributes.image.data.attributes.url;

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
