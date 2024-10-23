"use client";

import Link from "next/link";
import Image from "next/image";
import { fonts } from "./fonts";
import { usePathname } from "next/navigation";

const messages = {
  ru: "Такой страницы не найденно",
  ky: "Бул барак табылган жок",
  button: {
    ru: "Вернуться на главную",
    ky: "Башкы бетке кайтуу",
  },
};

function NotFound() {
  const locale = usePathname().split("/")[1];

  return (
    <html>
      <body className={fonts}>
        <div className="not-found">
          <Image src="/logo.png" width={100} height={100} />
          <h1>{messages[locale]}</h1>
          <Link href="/">{messages.button[locale]}</Link>
        </div>
      </body>
    </html>
  );
}

export default NotFound;
