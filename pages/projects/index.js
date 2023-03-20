import client from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import { isObjEmpty } from "../../utils";
import Head from "../../components/Head";
import { MdLaunch, MdFolderOpen } from "react-icons/md";

const Projects = ({ projectsData }) => {
  return (
    <>
      <Head title="Projects" />
      <main id="projects">
        <header className="text-center">
          <h1>Projects</h1>
          <p className="mt-2">
            Some of the projects I&apos;ve built for fun while learning new
            things.
          </p>
        </header>
        {projectsData.map((project, index) => (
          <section
            key={index}
            className="p-6 bg-white/25 mt-6 rounded-lg items-center grid sm:grid-cols-[auto,220px] gap-3 text-base"
          >
            <div>
              <h2 className="text-2xl md:text-3xl">{project.title}</h2>
              <ul className="flex items-center gap-4 text-gray-500 mb-2">
                {project.stack.map((proj, index) => (
                  <li key={index}>{proj}</li>
                ))}
              </ul>
              <BlockContent
                blocks={project.description}
                projectId="ewz4ezcb"
                dataset="production"
              />
              <nav className="flex items-center gap-5 mt-2">
                <a
                  href={project.link}
                  className="flex items-center gap-2 hover-shadow p-1 px-2 rounded-md transition duration-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MdLaunch className="text-cyan-500" />
                  Live site
                </a>
                <a
                  href={project.repo}
                  className="flex items-center gap-2 hover-shadow p-1 px-2 rounded-md transition duration-300"
                  rel="noreferrer"
                  target="_blank"
                >
                  <MdFolderOpen className="text-cyan-500" />
                  Repository
                </a>
              </nav>
            </div>
            <img
              src={project.mainImage.asset.url}
              alt={`${project.title} live website`}
              className="rounded-md grayscale hover:grayscale-0 transition duration-300 mx-auto max-h-52 sm:h-full object-cover"
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
