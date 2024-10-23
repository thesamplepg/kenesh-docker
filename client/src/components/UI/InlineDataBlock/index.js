import "./index.scss";

function InlineDataBlock({ title, children }) {
  return (
    <div className="ui-inline-data-block">
      <h3>{title}</h3>
      <div className="data-block-info">{children}</div>
    </div>
  );
}

export default InlineDataBlock;
