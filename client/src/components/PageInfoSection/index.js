"use client";

import React from "react";
import { Link } from "@/navigation";

import "./index.scss";

function PageInfoSection({ title, path }) {
  const paths =
    path &&
    path.map((item) => {
      return (
        <React.Fragment key={item.title}>
          <span>/</span>
          <Link href={item.path}>{item.title}</Link>
        </React.Fragment>
      );
    });

  return (
    <section className="page-info-section-component">
      <div className="container mx-auto">
        {path ? (
          <div className="path">
            <Link href="/">Главная</Link>
            {paths}
          </div>
        ) : null}
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default PageInfoSection;
