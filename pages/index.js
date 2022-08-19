import Head from "../components/Head";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <section id="about" className="content">
      <Head title="About" />

      <main>
        <header>
          <img
            src="/Maru.jpeg"
            alt="Maru profile pic"
            width="140"
            height="140"
          />
          <p>Hi. Hola. Olá</p>
          <h1>
            Call <span className="text-stroke">me</span> Maru
          </h1>
        </header>

        <p>
          <span className="emoji wave">👋</span> I&apos;m a self-taught{" "}
          <span className="bolder">front-end developer</span> who is passionate
          about learning new technologies & building things. As an art and
          design enthusiast, I truly love bringing ideas to life in the form of
          beautiful and responsive websites.
        </p>
        <p>
          My name is María Eugenia <span className="bolder">(she/her)</span> but
          most people call me Maru. During my free time I enjoy drawing,
          watching movies and playing board games. I&apos;m currently based in
          Portugal.
        </p>

        <section className="skills">
          <div className="page-title">
            <MdKeyboardArrowRight />
            <h2>Skills</h2>
          </div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>PHP</li>
            <li>Laravel</li>
          </ul>
        </section>
      </main>
    </section>
  );
}
