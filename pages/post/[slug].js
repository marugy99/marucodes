import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"

const Post = ({ postsData }) => {
    return (
        <>
        {postsData && 
            <article>
                <h1>{postsData.title}</h1>
                <BlockContent blocks={postsData.body} projectId="ewz4ezcb" dataset="production" />
            </article>
        }
        </>
    )
}
  
export async function getServerSideProps(context) {
    const slug = context.query.slug;
    
    try {
        const postsData = await client.fetch(`
        *[slug.current == "${slug}"][0] {
            title,
            body
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
  
export default Post;