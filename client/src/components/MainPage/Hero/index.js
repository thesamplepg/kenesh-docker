"use client";

import MainPost from "./MainPost";
import PostsList from "./PostsList";

import "./index.scss";

function MainHero({ news }) {
  return (
    <div className="main-page__hero">
      <div className="container mx-auto">
        <MainPost data={news[0]} />
        <PostsList data={news.slice(1, 3)} />
      </div>
    </div>
  );
}

export default MainHero;
