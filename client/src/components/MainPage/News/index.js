"use client";

import "./index.scss";
import SectionTitle from "../../UI/SectionTitle";
import NewsList from "./NewsList/index.js";
import { useEffect, useState } from "react";
import { fetchStrapi } from "@/utils/fetch";

function News({ messages, locale }) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [moreActive, setMoreActive] = useState(true);
  const quanity = 9;

  const getNews = async () => {
    const res = await fetchStrapi(
      `news?locale=${locale}&pagination[page]=${page}&pagination[pageSize]=${quanity}&populate=*`
    );

    setNews([...news, ...res.data]);
    setMoreActive(res.meta.pagination.total / (quanity * page) <= 1);
    setPage(page + 1);
  };

  const moreClickHandler = () => {
    getNews();
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="section dark-bg main-page__news">
      <SectionTitle>{messages.news}</SectionTitle>
      <div className="container mx-auto">
        {news.length ? <NewsList news={news} /> : null}
        {!moreActive ? (
          <button
            disabled={moreActive}
            onClick={moreClickHandler}
            className="more-button"
          >
            {messages.more_button}
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default News;
