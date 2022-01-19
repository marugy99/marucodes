import client from "../../client";
import Link from "next/link";
import { checkObj, formatDate } from "../../utils";
import Head from "../../components/Head";
import { MdKeyboardArrowRight } from "react-icons/md";

const Posts = ({ postsData }) => {
  return (
    <>
      <Head title="Journal" />
      <main id="journal" className="content">
        <header>
          <div className="page-title">
            <MdKeyboardArrowRight />
            <h1>Journal</h1>
          </div>
          <p>
            Some of my thoughts on the things I&apos;m learning and building.
          </p>
        </header>
        {postsData &&
          postsData.map((post, index) => (
            <Link href={`/journal/${post.slug.current}`} key={index}>
              <a className="journal-tile">
                <h2>{post.title}</h2>
                <div className="journal-info text-uppercase">
                  <ul>
                    {post.categories.map((category, index) => (
                      <li key={index}>{category.title}</li>
                    ))}
                  </ul>
                  <p>{formatDate(post.publishedAt)}</p>
                  <p>By {post.author}</p>
                </div>
                <p>{post.excerpt}</p>
                <p className="read-more text-uppercase">Read more</p>
              </a>
            </Link>
          ))}
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  try {
    const postsData = await client.fetch(`
        *[ _type == "post" ] | order(_createdAt desc) {
            title,
            body,
            excerpt,
            slug,
            publishedAt,
            "author": author->name,
            categories[] -> { title }
        }
        `);
    // Check if the object is empty, and if not return the data
    if (checkObj(postsData)) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          postsData,
        },
      };
    }
  } catch (err) {
    console.log(err);
  }
}

export default Posts;
