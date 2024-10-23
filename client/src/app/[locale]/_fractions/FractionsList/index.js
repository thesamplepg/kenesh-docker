import Fraction from "@/components/Fraction";

import "./index.scss";

function FractionsList({ data }) {
  const fractions = data.map((item) => {
    const fraction = <Fraction data={item} />;

    return (
      <li className="fractions-list-item" key={item.id}>
        <div className="fractions-item-container">{fraction}</div>
      </li>
    );
  });

  return <ul className="fractions-list">{fractions}</ul>;
}

export default FractionsList;
