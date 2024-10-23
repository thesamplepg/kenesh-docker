import Deputy from "@/components/Deputy";

import "./index.scss";

function DeputiesList({ data }) {
  const deputies = data.map((item) => {
    const deputy = <Deputy data={item} />;

    return (
      <li className="deputies-list-item" key={item.id}>
        <div className="deputy-item-container">{deputy}</div>
      </li>
    );
  });

  return <ul className="deputies-list">{deputies}</ul>;
}

export default DeputiesList;
