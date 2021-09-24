import Head from "../components/Head";
import Link from "next/link";

export default function Success() {
  return (
    <section className="content" id="success">
      <Head title="Success!" />
      <div>
        <h1>Form successfully submitted!</h1>
        <Link href="/">
          <a className="submit-btn">Go home</a>
        </Link>
      </div>
    </section>
  );
}
