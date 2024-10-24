import { Link } from "@/navigation";
import Image from "next/image";

import "./index.scss";
import { getImage } from "@/utils/index";

function NewsPost(props) {
  const data = props.data.attributes;
  const imageUrl = data.thumbnail.data.attributes.url;
  const url = getImage() + imageUrl;

  return (
    <div className="news-post-main-component">
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
          <p>{new Date(data.date).toLocaleDateString("ru")}</p>
          <h2>{data.title.split(/\s+/).slice(0, 15).join(" ")}</h2>
        </div>
      </Link>
    </div>
  );
}

export default NewsPost;
