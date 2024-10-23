"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/navigation";
import { withoutLocale } from "@/utils";

import "./index.scss";

function LangSwitcher() {
  const fullPathname = usePathname();
  const pathname = withoutLocale(fullPathname);
  const active = fullPathname.split("/")[1];

  return (
    <div className={`ui-langswitcher ui-langswitcher-${active}`}>
      <Link href={pathname} locale="ky">
        КЫР
      </Link>
      <Link href={pathname} locale="ru">
        РУС
      </Link>
    </div>
  );
}

export default LangSwitcher;
