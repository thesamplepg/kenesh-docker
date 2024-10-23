import { Link } from "@/navigation";
import Image from "next/image";

import "./index.scss";

function NewsPost(props) {
  const data = props.data.attributes;
  const imageUrl = data.thumbnail.data.attributes.url;
  const url = "http://127.0.0.1:1337" + imageUrl;

  return (
    <div className={"news-post-component"}>
      <Link href={`/news/${props.data.id}`}>
        <div className="post-image">
          <Image
            fill={true}
            src={url}
            style={{ objectFit: "cover" }}
            alt="image"
          />
        </div>
        <div className="post-info">
          <h2>{data.title.split(/\s+/).slice(0, 15).join(" ")}</h2>
          <p>{new Date(data.date).toLocaleDateString("ru")}</p>
        </div>
      </Link>
    </div>
  );
}

export default NewsPost;
