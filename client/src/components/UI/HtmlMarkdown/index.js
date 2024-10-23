import "./index.scss";

function HtmlMarkdown({ content }) {
  return (
    <section
      className="ui-html-markdown"
      dangerouslySetInnerHTML={{ __html: content }}
    ></section>
  );
}

export default HtmlMarkdown;
