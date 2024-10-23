import Image from "next/image";

import "./index.scss";
import { Link } from "@/navigation";

function Notice({ message }) {
  return (
    <div className="ui-notice">
      <Image
        src="/check.png"
        width={100}
        height={100}
        alt="Обращение полученно"
      />
      <p>{message}</p>
      <Link href="/">На главную</Link>
    </div>
  );
}

export default Notice;
