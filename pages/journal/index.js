import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"
import Link from "next/link"
import { checkObj, formatDate } from "../../functions/coolFunctions";
import Head from "../../components/Head";

const Posts = ({ postsData }) => {
    return (
        <>
            <Head title="Journal"/>
            {
                postsData && postsData.map((post, index) => (
                    <Link href={`/journal/${post.slug.current}`} key={index}>
                        <a>
                            <article>
                                <h1>{post.title}</h1>
                                <p>{formatDate(post.publishedAt)}</p>
                                <p>By {post.author}</p>
                                {post.categories.map((category, index) => (
                                    <ul key={index}>
                                        <li>{category.title}</li>
                                    </ul>
                                ))}
                                <BlockContent blocks={post.body} projectId="ewz4ezcb" dataset="production" />
                            </article>
                        </a>
                    </Link>
                ))
            }
        </>
    )
}
  
export async function getStaticProps(context) {
    
    try {
        const postsData = await client.fetch(`
        *[ _type == "post" ] {
            title,
            body,
            slug,
            publishedAt,
            "author": author->name,
            categories[] -> { title }
        }
        `)
        // Check if the object is empty, and if not return the data
        if (checkObj(postsData)) {
            return {
                notFound: true
            }
        } else {
            return {
                props: {
                    postsData
                }
            }
        }
    }

    catch (err) {
        console.log(err)
    }

}
  
export default Posts;