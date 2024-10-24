import { Link } from "@/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import Image from "next/image";
import { getImage } from "@/utils/index";

const socialIcons = {
  instagram: faInstagramSquare,
  facebook: faFacebookSquare,
};

function DeputyInfo({ name, group, avatar, phone, mail, social, text }) {
  const url = getImage() + avatar.data.attributes.url;

  const style = {
    backgroundImage: `url(${url})`,
  };
  const socialLinks =
    social &&
    Object.keys(social).map((key) => {
      const link = social[key];

      return (
        <a href={link} key={key}>
          <FontAwesomeIcon icon={socialIcons[key]} />
        </a>
      );
    });

  return (
    <div className="deputy-main-info-component drop-shadow">
      <div className="avatar drop-shadow">
        <Image
          fill={true}
          src={url}
          style={{ objectFit: "cover" }}
          alt="image"
        />
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>
        {text ? (
          <p>
            <Link href={`#`} className="phone">
              {text}
            </Link>
          </p>
        ) : null}
        {group && group.data ? (
          <p>
            <Link
              href={`/deputies?fraction=${group.data.id}`}
              className="group"
            >
              <FontAwesomeIcon icon={faPeopleGroup} />
              Парламентская фракция {group.data.attributes.name}
            </Link>
          </p>
        ) : null}
        {phone ? (
          <p>
            <a href={`tel:${phone}`} className="phone">
              <FontAwesomeIcon icon={faPhone} />
              {phone}
            </a>
          </p>
        ) : null}
        {mail ? (
          <p>
            <a href={`mailto:${mail}`} className="mail">
              <FontAwesomeIcon icon={faEnvelope} />
              {mail}
            </a>
          </p>
        ) : null}
        <div className="socials">{socialLinks}</div>
      </div>
    </div>
  );
}

export default DeputyInfo;
