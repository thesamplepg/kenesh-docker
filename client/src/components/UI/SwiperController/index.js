import Image from "next/image";
import "./index.scss";

function SwiperController({ classes, inside }) {
  return (
    <div
      className={`ui-slider-controller ${
        inside ? "ui-slider-controller-inside" : ""
      }`}
    >
      <button className={`drop-shadow ${classes[0]}`}>
        <Image width={30} height={30} src="/arrow-left.png" alt="arrow" />
      </button>
      <button className={`drop-shadow ${classes[1]}`}>
        <Image width={30} height={30} src="/arrow-right.png" alt="arrow" />
      </button>
    </div>
  );
}

export default SwiperController;
