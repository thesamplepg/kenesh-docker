import "./index.scss";
import { useTranslations } from "next-intl";

function NoContent({ children, show }) {
  if (show) return children;

  const t = useTranslations("UI");

  return (
    <div className="no-content-component">
      <h2>{t("no-content")}</h2>
    </div>
  );
}

export default NoContent;
