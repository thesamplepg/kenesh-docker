import { fonts } from "../fonts";
import { fetchStrapi } from "@/utils/fetch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnotherResources from "@/components/Widgets/AnotherResources";
import ProgressBar from "nextjs-toploader";
import { getTranslations } from "next-intl/server";

// import "../globals.css";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("main.title"),
    description: t("main.description"),
  };
};

export default async function RootLayout({ children, params }) {
  const res = await fetchStrapi(
    `menus?filters[slug][$eq]=${params.locale || "ky"}&nested&populate=*`
  );

  const menus = res.data[0].attributes.items.data;

  return (
    <html lang={params.locale}>
      <body className={fonts}>
        <ProgressBar showSpinner={false} />
        <Header menus={menus} />
        {children}
        <AnotherResources />
        <Footer menus={menus} />
      </body>
    </html>
  );
}
