"use client";

import { useRouter } from "@/navigation";

function Tr({ link, children }) {
  const router = useRouter();
  const clickHandler = () => router.push(link);

  return <tr onClick={clickHandler}>{children}</tr>;
}

export default Tr;
