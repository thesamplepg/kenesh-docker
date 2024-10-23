"use client";

import { Link } from "@/navigation";
import { usePathname } from "next/navigation";

import "./index.scss";
import { withoutLocale } from "@/utils";

function Pagination({ pages, active }) {
  if (pages < 2) return "";

  const pathname = withoutLocale(usePathname());

  const elements = [];

  let startPage = active - 2;
  let endPage = active + 2;

  if (startPage <= 0) {
    startPage = 1;
  }

  if (endPage > pages) endPage = pages;

  const renderListItem = (page) => {
    return (
      <li
        className={`pagination-item ${active == page ? "current" : ""}`}
        key={page}
      >
        <Link href={`${pathname}?page=${page}`}>{page}</Link>
      </li>
    );
  };

  if (startPage > 1) elements.push(renderListItem(1));

  for (let i = startPage; i <= endPage; i++) {
    elements.push(renderListItem(i));
  }

  if (endPage < pages) elements.push(renderListItem(pages));

  return (
    <div className="ui-pagination">
      <ul className="pagination-list">{elements}</ul>
    </div>
  );
}

export default Pagination;
