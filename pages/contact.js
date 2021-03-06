import Head from "../components/Head";
import { MdKeyboardArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="content">
      <Head title="Contact" />
      <header>
        <div className="page-title">
          <MdKeyboardArrowRight />
          <h1>Contact</h1>
        </div>
        <p>Let&apos;s get in touch!</p>
      </header>
      <form name="contact" action="/success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-info">
          <label htmlFor="name">
            Name
            <input type="text" name="name" id="name" required />
          </label>

          <label htmlFor="email">
            Email
            <input type="email" name="email" id="email" required />
          </label>
        </div>

        <label htmlFor="message">
          Message
          <textarea name="message" id="message" rows="10" required></textarea>
        </label>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
