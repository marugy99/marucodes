import Head from "../components/Head";
import {
  HiOutlineCode,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
  HiOutlineSparkles,
} from "react-icons/hi";
import { GiWorld } from "react-icons/gi";
import { useState } from "react";

export default function Home() {
  const [accordion, setAccordion] = useState(null);

  function toggleAccordion(id) {
    accordion === id ? setAccordion(null) : setAccordion(id);
  }

  return (
    <section id="about">
      <Head title="About" />

      <main>
        <div>
          <header className="text-center">
            <img
              src="/Maru.jpeg"
              alt="Maru smiling"
              width="140"
              height="140"
              className="rounded-3xl border-8 border-white/25 mx-auto shadow-lg shadow-indigo-500/30"
            />
            <p className="mt-3">Hi. Hola. Olá</p>
            <div className="relative w-max mx-auto mt-1">
              <h1>I&apos;m Maru</h1>
              <span className="absolute bottom-[-10px] right-[-20px] rotate-45 text-gray-400 font-bold">
                :)
              </span>
            </div>
          </header>

          <div className="text-base sm:text-lg mt-4">
            <button
              onClick={() => toggleAccordion(1)}
              className={`${
                accordion === 1
                  ? "shadow-lg shadow-indigo-500/30"
                  : "hover-shadow"
              } text-left w-full transition duration-300 bg-white/20 px-3 py-2 mb-2 rounded-lg grid grid-cols-[auto,25px] gap-3 items-center`}
              aria-expanded={accordion === 1}
            >
              <div className="grid grid-cols-[30px,auto] gap-2 sm:gap-3 items-center">
                <HiOutlineCode className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-500" />
                <p>
                  I&apos;m a frontend developer and design enthusiast who is
                  passionate about learning new things.
                </p>
              </div>
              {accordion === 1 ? (
                <HiOutlineChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              ) : (
                <HiOutlineChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              )}
            </button>

            <p
              className={`${
                accordion === 1
                  ? "visible max-h-[600px] mt-3 mb-4 opacity-100"
                  : "invisible max-h-0 opacity-0"
              } px-3 text-base text-gray-600 transition-all duration-150`}
            >
              I&apos;m a self-taught developer and I truly love bringing ideas
              to life in the form of beautiful, accessible and user-friendly web
              apps. I&apos;m currently working as a full-time developer at
              <a
                className="ml-1 underline underline-offset-4 decoration-dashed decoration-cyan-500"
                href="https://castos.com/"
                rel="noreferrer"
                target="_blank"
              >
                Castos
              </a>
              , a podcast hosting platform.
            </p>

            <button
              onClick={() => toggleAccordion(2)}
              className={`${
                accordion === 2
                  ? "shadow-lg shadow-indigo-500/30"
                  : "hover-shadow"
              } mt-4 text-left w-full transition duration-300 bg-white/20 px-3 py-2 rounded-lg grid grid-cols-[auto,25px] gap-3 items-center`}
              aria-expanded={accordion === 2}
            >
              <div className="grid grid-cols-[30px,auto] gap-2 sm:gap-3 items-center">
                <HiOutlineSparkles className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-500" />
                <p>My name is María Eugenia but everyone calls me Maru.</p>
              </div>
              {accordion === 2 ? (
                <HiOutlineChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              ) : (
                <HiOutlineChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              )}
            </button>

            <p
              className={`${
                accordion === 2
                  ? "visible max-h-[600px] mt-3 mb-4 opacity-100"
                  : "invisible max-h-0 opacity-0"
              } px-3 text-base text-gray-600 transition-all duration-150`}
            >
              During my free time I enjoy drawing, playing board games and
              watching movies. I also like to write about my experience working
              as a dev, about what I&apos;m learning and occasional random
              stuff.
            </p>

            <button
              onClick={() => toggleAccordion(3)}
              className={`${
                accordion === 3
                  ? "shadow-lg shadow-indigo-500/30"
                  : "hover-shadow"
              } mt-4 text-left w-full transition duration-300 bg-white/20 px-3 py-2 rounded-lg grid grid-cols-[auto,25px] gap-3 items-center`}
              aria-expanded={accordion === 2}
            >
              <div className="grid grid-cols-[30px,auto] gap-2 sm:gap-3 items-center">
                <GiWorld className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-500" />
                <p>Currently based in Portugal.</p>
              </div>
              {accordion === 3 ? (
                <HiOutlineChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              ) : (
                <HiOutlineChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              )}
            </button>

            <p
              className={`${
                accordion === 3
                  ? "visible max-h-[600px] mt-3 mb-4 opacity-100"
                  : "invisible max-h-0 opacity-0"
              } px-3 text-base text-gray-600 transition-all duration-150`}
            >
              I was born and raised in Venezuela, and I also lived in Santiago
              de Chile :)
            </p>
          </div>
        </div>

        <section className="mt-6 text-center">
          <h2 className="text-4xl sm:text-5xl">Skills</h2>
          <ul className="grid grid-cols-2 gap-3 max-w-sm mt-4 mx-auto">
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
