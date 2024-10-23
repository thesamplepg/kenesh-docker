"use client";

import { useEffect, useState } from "react";

import HtmlMarkdown from "@/components/UI/HtmlMarkdown";
import { fetchStrapi } from "@/utils/fetch";
import ContentLoader from "@/components/UI/ContentLoader";

function Content({ pageId, locale }) {
  const [content, setContent] = useState(null);

  const getContent = async () => {
    const res = await fetchStrapi(
      `page/${pageId}?locale=${locale}&fields[0]=content`
    );

    if (!res) return false;

    setContent(res.data.attributes.content);
  };

  useEffect(() => {
    getContent();
  }, []);

  return content ? <HtmlMarkdown content={content} /> : <ContentLoader />;
}

export default Content;
