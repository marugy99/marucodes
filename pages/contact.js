import Head from "../components/Head";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="content">
      <Head title="Contact" />
      <header>
        <div>
          <MdKeyboardArrowRight />
          <h1>Contact</h1>
        </div>
        <p>Let's get in touch!</p>
      </header>
      <form action="POST" data-netlify="true">
        <div className="contact-info">
          <label for="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </label>
          <label for="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <textarea
          class="text-area"
          name="message"
          id="message"
          rows="10"
          placeholder="Your message..."
          required
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
