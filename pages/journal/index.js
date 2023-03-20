import client from "../../client";
import Link from "next/link";
import { isObjEmpty, formatDate } from "../../utils";
import Head from "../../components/Head";
import { HiOutlineSparkles } from "react-icons/hi";

const Posts = ({ postsData }) => {
  return (
    <>
      <Head title="Journal" />
      <main id="journal">
        <header className="text-center">
          <h1>Journal</h1>
          <p className="mt-2">
            Some of my thoughts on the things I&apos;m learning and building.
          </p>
        </header>
        {postsData &&
          postsData.map((post, index) => (
            <Link href={`/journal/${post.slug.current}`} key={index}>
              <a className="p-6 bg-white/25 mt-6 rounded-xl block text-base hover-shadow transition duration-300 group">
                <h2 className="text-2xl md:text-3xl">{post.title}</h2>
                <div className="flex sm:items-center flex-col gap-1 mt-1 sm:mt-0 sm:flex-row sm:gap-4 text-gray-500">
                  <ul className="flex items-center gap-2 flex-wrap list-none">
                    {post.categories.map((category, index) => (
                      <li key={index}>{category.title}</li>
                    ))}
                  </ul>
                  <p>{formatDate(post.publishedAt)}</p>
                  <p>By {post.author}</p>
                </div>
                <p className="mt-2">{post.excerpt}</p>
                <p className="mt-2 flex items-center gap-2 text-gray-500 group-hover:text-gray-700">
                  <HiOutlineSparkles className="w-4 h-4 text-cyan-500" />
                  Read more
                </p>
              </a>
            </Link>
          ))}
      </main>
    </>
  );
};

export async function getStaticProps() {
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
  if (isObjEmpty(postsData)) {
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
}

export default Posts;
