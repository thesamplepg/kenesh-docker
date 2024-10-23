import "./index.scss";

function FilesList({ files }) {
  const list = files.data.map((file) => {
    const downloadLink =
      process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL + file.attributes.url;

    return (
      <li className="files-item" key={file.id}>
        <a href={downloadLink}>
          <img src="/document-blue.png" />
          {file.attributes.name}
        </a>
      </li>
    );
  });

  return <ul className="ui-files-list">{list}</ul>;
}

export default FilesList;
