import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

function ContactWidget() {
  const t = useTranslations("Widgets");

  return (
    <div className="widget-contact drop-shadow">
      <Link href="/contact">
        <FontAwesomeIcon icon={faContactBook} />
        {t("contact")}
      </Link>
    </div>
  );
}

export default ContactWidget;
