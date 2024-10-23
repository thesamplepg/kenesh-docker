import { fetchStrapi } from "@/utils/fetch";
import "./index.scss";
import Bills from "@/components/Widgets/Biils";
import Fractions from "@/components/Widgets/Fractions";

async function Sidebar() {
  const res = await fetchStrapi(
    "main-page?populate=deputies.avatar&populate=deputies.fraction&populate=fractions.image&populate=bills"
  );

  return (
    <section className="wdiget-info-sidebar">
      <div className="sidebar-blocks">
        <Bills data={res.data.attributes.bills.data} />
      </div>
      <div className="sidebar-blocks">
        <Fractions data={res.data.attributes.fractions.data} />
      </div>
    </section>
  );
}

export default Sidebar;
