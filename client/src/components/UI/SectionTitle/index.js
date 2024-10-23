import "./index.scss";

function SectionTitle({ children }) {
  return (
    <section className="ui-section-title">
      <div className="container mx-auto">
        <h2>{children}</h2>
        <span></span>
      </div>
    </section>
  );
}

export default SectionTitle;
