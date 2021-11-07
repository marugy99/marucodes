import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { checkObj, formatDate } from "../../customFunctions/coolFunctions";
import Head from "../../components/Head";
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import Codepen from "../../components/Codepen";
import React,  { useEffect } from "react";
import Prism from "prismjs";

const SinglePost = ({ singlePost }) => {

  const serializers = {
    types: {
      code: props => (
        <div>
          <span className="code-lang">{props.node.language}</span>
          <pre data-language={props.node.language} className={`language-${props.node.language}`}>
            <code>{props.node.code}</code>
          </pre>
        </div>
      ),
      youtube: ({node}) => {
        const { url } = node
        const id = getYouTubeId(url)
        return (<YouTube videoId={id} />)
      },
      codepen: ({ node }) => {
        const { url } = node;
        const splitURL = url.split("/");
        const [, , , user, , hash] = splitURL;
        const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&theme-id=dark&default-tab=result`;
        return (
          <Codepen url={embedUrl} />
        );
      }
    }
  }

  useEffect(() => {
    setTimeout(() => Prism.highlightAll(), 0)
  }, []);

  return (
    <div className="content" id="single-post">
      {singlePost && (
        <article className="journal-tile">
          <Head title={singlePost.title} ogTitle={singlePost.title} ogDescription={singlePost.extract} ogImage={singlePost.mainImage.asset.url} />
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

export async function getStaticPaths(context) {
  try {
    const allPosts = await client.fetch(`
        *[ _type == "post" ] {
            slug
        }
        `);
    // Map through each "data" returned and return the slugs as params. This is so Next knows how many pages to generate
    const paths = allPosts.map((post) => {
      return {
        params: { slug: post.slug.current },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  try {
    const singlePost = await client.fetch(`
        *[slug.current == "${slug}"][0] {
            title,
            body,
            publishedAt,
            extract,
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
    // Check if the object is empty, and if not return the data
    if (checkObj(singlePost)) {
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
  } catch (err) {
    console.log(err);
  }
}

export default SinglePost;
