import PageInfoSection from "@/components/PageInfoSection";
import { getTranslations } from "next-intl/server";
import { useMessages } from "next-intl";

import "./index.scss";
import Form from "./Form";

export const generateMetadata = async () => {
  const t = await getTranslations("MetaData");

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
};

function Contact({}) {
  const messages = useMessages().Contact;

  return (
    <>
      <PageInfoSection
        title={messages.title}
        path={[{ path: "/contact", title: "Связаться" }]}
      />
      <main className="page-contact">
        <div className="container mx-auto section">
          <Form messages={messages} />
        </div>
      </main>
    </>
  );
}

export default Contact;
