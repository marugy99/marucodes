import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"
import { checkObj } from "../../functions/coolFunctions";
import Head from "../../components/Head";
import { MdKeyboardArrowRight } from "react-icons/md";

const Projects = ({ projectsData }) => {
    return ( 
        <section id="projects">
            <Head title="Projects"/>
            <header>
                <MdKeyboardArrowRight /><h1>Projects</h1>
            </header>
            {
                projectsData.map((project, index) => (
                    <article key={index} className="project-tile">
                        <div>
                            <h2>{project.title}</h2>
                            <BlockContent blocks={project.description} projectId="ewz4ezcb" dataset="production" />
                            <a href={project.link} rel="noreferrer" target="_blank">Live site</a>
                            <br />
                            <a href={project.repo} rel="noreferrer" target="_blank">Repository</a>
                            {
                                project.stack.map((proj, index) => (
                                    <ul key={index}>
                                        <li>{proj}</li>
                                    </ul>
                                ))
                            }
                        </div>
                        <img src={project.mainImage.asset.url} alt={project.mainImage.alt} />
                    </article>
                ))
            }
        </section>
     );
}

export async function getStaticProps(context) {
    
    try {
        const projectsData = await client.fetch(`
        *[ _type == "project" ] | order(_createdAt asc) {
            title,
            description,
            link,
            repo,
            stack[],
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
        if (checkObj(projectsData)) {
            return {
                notFound: true
            }
        } else {
            return {
                props: {
                    projectsData
                }
            }
        }
    }

    catch (err) {
        console.log(err)
    }

}
 
export default Projects;