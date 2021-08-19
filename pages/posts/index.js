import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"
import Link from "next/link"

const Posts = ({ postsData }) => {
    return (
        <>
            {
                postsData && postsData.map((post, index) => (
                    <Link href={`/posts/${post.slug.current}`} key={index}>
                        <a>
                            <article>
                                <h1>{post.title}</h1>
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
            slug
        }
        `)
        // Check if the object is empty, and if not return the data
        if (Object.keys(postsData).length === 0 && postsData.constructor === Object) {
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