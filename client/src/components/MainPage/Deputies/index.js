import { fetchStrapi } from "@/utils/fetch";
import Deputy from "@/components/Deputy";
import { useTranslations } from "next-intl";

import SectionTitle from "../../UI/SectionTitle";
import DeputiesSlider from "../../Widgets/DeputiesSlider";

import "./index.scss";

function MainDeputies({ deputies }) {
  const t = useTranslations("MainPage");

  return (
    <section className="section main-page__deputies">
      <SectionTitle>{t("deputies")}</SectionTitle>
      <div className="container mx-auto">
        <DeputiesSlider data={deputies} />
      </div>
    </section>
  );
}

export default MainDeputies;
