import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { checkObj, formatDate } from "../../customFunctions/coolFunctions";
import Head from "../../components/Head";

const SinglePost = ({ singlePost }) => {
  console.log(singlePost);

  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  return (
    <div className="content" id="single-post">
      {singlePost && (
        <article className="journal-tile">
          <Head title={singlePost.title} />
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
          {singlePost.mainImage && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.mainImage.alt}
            />
          )}
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
