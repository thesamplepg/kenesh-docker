import Gallery from "@/components/UI/Gallery";
import HtmlMarkdown from "@/components/UI/HtmlMarkdown";
import PageInfoSection from "@/components/PageInfoSection";
import { fetchStrapi } from "@/utils/fetch";
import NewsSidebar from "@/components/Widgets/NewsSidebar";

import "./index.scss";

async function Post({ params, searchParams }) {
  const id = params.id;

  const res = await fetchStrapi(
    `news/${id}?locale=${params.locale}&populate=*`
  );
  const { title, images, content } = res.data.attributes;

  return (
    <>
      <PageInfoSection
        title={title}
        path={[{ path: "/news", title: "Новости" }]}
      />
      <main className="news-post-page">
        <div className="section container mx-auto">
          <div className="content">
            <section className="gallery">
              <Gallery images={images} />
            </section>
            <div className="markdown">
              <HtmlMarkdown content={content} />
            </div>
          </div>
          <div className="featured">
            <NewsSidebar />
          </div>
        </div>
      </main>
    </>
  );
}

export default Post;
