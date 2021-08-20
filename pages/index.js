import Header from "../components/Header"

export default function Home() {
  return (
    <section>
      <Header title="Call me Maru"/>

      <header>
        <img src="/Maru.jpeg" alt="Maru profile pic" />
        <p>Hi. Hola. Olá</p>
        <h1>Call <span className="text-stroke">me</span> Maru</h1>
      </header>

      <p>👋  I'm a  self-taught <span className="bolder">front-end developer</span> who is passionate about learning new technologies & building things. As an art and design enthusiast, I truly love bringing ideas to life in the form of beautiful and responsive websites.</p>
      <p>My name is María Eugenia <span className="bolder">(she/her)</span> but most people call me Maru. During my free time I enjoy playing videogames and filming silly videos. 🎬 </p>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </section>
  )
}
