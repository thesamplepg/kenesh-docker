import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faLink } from "@fortawesome/free-solid-svg-icons";

function AnotherResources() {
  const t = useTranslations("UI");

  const links = [
    {
      title: t("links.president"),
      link: "https://president.kg",
    },
    {
      title: t("links.min"),
      link: "https://www.gov.kg/",
    },
    {
      title: t("links.purchases"),
      link: "http://zakupki.gov.kg/",
    },
    {
      title: t("links.judge"),
      link: "http://sot.kg/",
    },
  ];

  const list = links.map((link) => (
    <Link href={link.link} className="resource drop-shadow-lg" key={link.title}>
      <li>
        <h3>{link.title}</h3>
        <FontAwesomeIcon icon={faLink} />
      </li>
    </Link>
  ));

  return (
    <section className="section dark-bg widget-another-resources">
      <div className="container mx-auto">
        <ul className="resources-list">{list}</ul>
      </div>
    </section>
  );
}

export default AnotherResources;
