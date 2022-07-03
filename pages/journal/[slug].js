import React, { useEffect } from "react";
import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { isObjEmpty, formatDate, urlFor } from "../../utils";
import Head from "../../components/Head";
import Codepen from "../../components/Codepen";
import Gallery from "../../components/Gallery";
import CodeSnippet from "../../components/CodeSnippet";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import Prism from "prismjs";

const SinglePost = ({ singlePost }) => {
  const serializers = {
    types: {
      code: ({ node }) => (
        <CodeSnippet language={node.language} code={node.code} />
      ),
      youtube: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);
        return <YouTube videoId={id} />;
      },
      codepen: ({ node }) => {
        const { url } = node;
        const splitURL = url.split("/");
        const [, , , user, , hash] = splitURL;
        const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;
        return <Codepen url={embedUrl} />;
      },
      image: ({ node }) => {
        return <img src={urlFor(node.asset)} alt={node.alt} />; 
      },
      gallery: ({ node }) => {
        return <Gallery images={node.images} callback={urlFor} />
      }
    },
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="content" id="single-post">
      {singlePost && (
        <article className="journal-tile">
          <Head
            title={singlePost.title}
            ogTitle={singlePost.title}
            ogDescription={singlePost.excerpt}
            ogImage={singlePost.mainImage.asset.url}
          />
          <h1>{singlePost.title}</h1>
          <div className="journal-info text-uppercase">
            {singlePost.categories.map((category, index) => (
              <ul key={index}>
                <li>{category.title}</li>
              </ul>
            ))}
            <p>{formatDate(singlePost.publishedAt)}</p>
            <p>By {singlePost.author}</p>
          </div>
          <BlockContent
            blocks={singlePost.body}
            projectId="ewz4ezcb"
            dataset="production"
            serializers={serializers}
          />
        </article>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const allPosts = await client.fetch(`
    *[ _type == "post" ] {
        slug
    }
  `);

  const paths = allPosts.map((post) => {
    return {
      params: { slug: post.slug.current },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const singlePost = await client.fetch(`
    *[slug.current == "${slug}"][0] {
        title,
        body,
        publishedAt,
        excerpt,
        "author": author->name,
        categories[] -> { title },
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }
  `);
  // If object is empty, show not found page
  if (isObjEmpty(singlePost)) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        singlePost,
      },
    };
  }
}

export default SinglePost;
