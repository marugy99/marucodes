import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { isObjEmpty } from "../../utils";
import Head from "../../components/Head";
import { MdKeyboardArrowRight, MdLaunch, MdFolderOpen } from "react-icons/md";

const Projects = ({ projectsData }) => {
  return (
    <>
      <Head title="Projects" />
      <main id="projects" className="content">
        <header>
          <div className="page-title">
            <MdKeyboardArrowRight />
            <h1>Projects</h1>
          </div>
          <p>Some of the projects I&apos;ve built while learning new things.</p>
        </header>
        {projectsData.map((project, index) => (
          <section key={index} className="project-tile">
            <div className="project-info">
              <h2>{project.title}</h2>
              <ul className="text-uppercase">
                {project.stack.map((proj, index) => (
                  <li key={index}>{proj}</li>
                ))}
              </ul>
              <BlockContent
                blocks={project.description}
                projectId="ewz4ezcb"
                dataset="production"
              />
              <nav className="project-links">
                <a href={project.link} rel="noreferrer" target="_blank">
                  <MdLaunch />
                  Live site
                </a>
                <a href={project.repo} rel="noreferrer" target="_blank">
                  <MdFolderOpen />
                  Repository
                </a>
              </nav>
            </div>
            <img
              src={project.mainImage.asset.url}
              alt={`${project.title} live website`}
            />
          </section>
        ))}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const projectsData = await client.fetch(`
        *[ _type == "project" ] | order(_createdAt desc) {
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
        `);
  // Check if the object is empty, and if not return the data
  if (isObjEmpty(projectsData)) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        projectsData,
      },
    };
  }
}

Projects.displayName = "Projects";

export default Projects;
