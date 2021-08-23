import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"
import { checkObj, formatDate } from "../../functions/coolFunctions";

const SinglePost = ({ singlePost }) => {
    console.log(singlePost)

    return (
        <>
        {singlePost && 
            <article>
                <h1>{singlePost.title}</h1>
                <p>{formatDate(singlePost.publishedAt)}</p>
                <p>By {singlePost.author}</p>
                {singlePost.categories.map((category, index) => (
                    <ul key={index}>
                        <li>{category.title}</li>
                    </ul>
                ))}
                {singlePost.mainImage ? <img src={singlePost.mainImage.asset.url} alt={singlePost.mainImage.alt} /> : "No picture"}
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
        `)
        // Check if the object is empty, and if not return the data
        if (checkObj(singlePost)) {
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