import Head from "../components/Head";
import Link from "next/link";

export default function Success() {
  return (
    <section id="success">
      <Head title="Success!" />
      <h1 className="text-4xl md:text-5xl text-center">
        Form successfully submitted!
      </h1>
      <Link href="/">
        <a className="mx-auto block text-center w-max mt-6 shadow-lg bg-white/25 shadow-indigo-500/30 hover:shadow-indigo-500/50 transition duration-300 px-4 py-2 rounded-lg">
          Go home
        </a>
      </Link>
    </section>
  );
}
