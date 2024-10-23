import Image from "next/image";

import "./index.scss";

function ContentLoader() {
  return (
    <div className="ui-content-loader">
      <Image width={50} height={50} src="/spinner.png" alt="spinner" />
    </div>
  );
}

export default ContentLoader;
