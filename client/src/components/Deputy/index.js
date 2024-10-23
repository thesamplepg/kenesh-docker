import { Link } from "@/navigation";

import "./index.scss";
import Image from "next/image";

function Deputy({ data, round }) {
  const info = data.attributes;
  const imageUrl = "http://127.0.0.1:1337" + info.avatar.data.attributes.url;
  const fraction = info.fraction.data && info.fraction.data.attributes.name;

  return (
    <div
      className="deputy-component drop-shadow-lg"
      style={{ borderRadius: round ? "5px" : 0 }}
    >
      <Link href={`/deputies/${data.id}`}>
        <div className="deputy-image">
          <Image
            fill={true}
            src={imageUrl}
            style={{ objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="deputy-info">
          {fraction ? <p>Фракция &#171;{fraction}&#187;</p> : null}
          <h3>{info.name}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Deputy;
