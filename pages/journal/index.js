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
                <div className="flex sm:items-center justify-between sm:gap-4 flex-col sm:flex-row">
                  <h2 className="text-2xl flex-1">{post.title}</h2>
                  <p className="text-gray-500 text-sm">
                    {formatDate(post.publishedAt)}
                  </p>
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
