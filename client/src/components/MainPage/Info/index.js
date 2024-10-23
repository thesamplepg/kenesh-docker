import { fetchStrapi } from "@/utils/fetch";
import Bills from "../../Widgets/Biils";
import Fractions from "../../Widgets/Fractions";
import Deputy from "../../Deputy";

import "./index.scss";
import Chairmans from "../../Widgets/Chairmans";

async function MainInfo({ bills, fractions, chairmans }) {
  return (
    <section className="section dark-bg main-page__info">
      <div className="container mx-auto">
        <section className="info-blocks">
          <Fractions data={fractions} />
        </section>
        <section className="info-blocks">
          <Chairmans data={chairmans} />
        </section>
        <section className="info-blocks">
          <Bills data={bills} />
        </section>
      </div>
    </section>
  );
}

export default MainInfo;
