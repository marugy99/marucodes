import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"

const SinglePost = ({ singlePost }) => {
    return (
        <>
        {singlePost && 
            <article>
                <h1>{singlePost.title}</h1>
                <BlockContent blocks={singlePost.body} projectId="ewz4ezcb" dataset="production" />
            </article>
        }
        </>
    )
}

export async function getStaticPaths(context) {

    try {
        const allPosts = await client.fetch(`
        *[ _type == "post" ] {
            title,
            body,
            slug
        }
        `)
        // Map through each "data" returned and return the slugs as params. This is so Next knows how many pages to generate
        const paths = allPosts.map(post => {
            return {
                params: { slug: post.slug.current }
            }
        })
 
        return {
            paths,
            fallback: false
        }
    }

    catch (err) {
        console.log(err)
    }
}
  
export async function getStaticProps(context) {
    const slug = context.params.slug;
    
    try {
        const singlePost = await client.fetch(`
        *[slug.current == "${slug}"][0] {
            title,
            body
        }
        `)
        // Check if the object is empty, and if not return the data
        if (Object.keys(singlePost).length === 0 && singlePost.constructor === Object) {
            return {
                notFound: true
            }
        } else {
            return {
                props: {
                    singlePost
                }
            }
        }
    }

    catch (err) {
        console.log(err)
    }

}
  
export default SinglePost;