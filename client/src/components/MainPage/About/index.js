import { useTranslations } from "next-intl";
import Image from "next/image";
import "./index.scss";

function About() {
  const t = useTranslations("MainPage");

  return (
    <section className="main-page__about">
      <div className="container section mx-auto">
        <div className="image">
          <Image src="/logo.png" width={80} height={80} />
        </div>
        <div className="info">
          <h1>{t("about-title")}</h1>
          <article>{t("about-description")}</article>
        </div>
      </div>
    </section>
  );
}

export default About;
