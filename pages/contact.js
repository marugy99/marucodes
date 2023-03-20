import Head from "../components/Head";

const Contact = () => {
  return (
    <section id="contact" className="content">
      <Head title="Contact" />
      <header>
        <header className="text-center">
          <h1>Contact</h1>
          <p className="mt-2">Let&apos;s get in touch!</p>
        </header>
      </header>
      <form
        className="space-y-6"
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">
          Name
          <input
            className="bg-white/50 rounded-lg block w-full p-2 mt-2"
            type="text"
            name="name"
            id="name"
            required
          />
        </label>

        <label htmlFor="email" className="block">
          Email
          <input
            className="bg-white/50 rounded-lg block w-full p-2 mt-2"
            type="email"
            name="email"
            id="email"
            required
          />
        </label>

        <label htmlFor="message" className="block">
          Message
          <textarea
            className="bg-white/50 rounded-lg block w-full p-2 resize-none mt-2"
            name="message"
            id="message"
            rows="5"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="shadow-lg bg-white/25 shadow-indigo-500/30 hover:shadow-indigo-500/50 transition duration-300 px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
