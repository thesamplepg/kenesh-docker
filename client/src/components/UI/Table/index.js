import "./index.scss";

function Table({ titles, children }) {
  const titleElements = titles.map((title) => {
    return <th key={title}>{title}</th>;
  });

  return (
    <table className="ui-table-component">
      <thead>
        <tr>{titleElements}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
