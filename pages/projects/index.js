import client from "../../client";
import BlockContent from "@sanity/block-content-to-react"
import { checkObj } from "../../functions/coolFunctions";
import Head from "../../components/Head";
import { MdKeyboardArrowRight, MdLaunch } from "react-icons/md";

const Projects = ({ projectsData }) => {
    return ( 
        <section id="projects">
            <Head title="Projects"/>
            <header>
                <MdKeyboardArrowRight /><h1>Projects</h1>
            </header>
            <p>These are some of the projects I’ve built while learning new things.</p>
            {
                projectsData.map((project, index) => (
                    <article key={index} className="project-tile">
                        <div>
                            <h2>{project.title}</h2>
                            <ul>
                                {
                                    project.stack.map((proj, index) => (
                                        <li key={index}>{proj}</li>
                                    ))
                                }
                            </ul>
                            <BlockContent blocks={project.description} projectId="ewz4ezcb" dataset="production" />
                            <div className="project-links">
                                <div><MdLaunch /><a href={project.link} rel="noreferrer" target="_blank">Live site</a></div>
                                <a href={project.repo} rel="noreferrer" target="_blank">Repository</a>
                            </div>
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