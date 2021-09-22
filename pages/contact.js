import Head from "../components/Head";
import { MdKeyboardArrowRight, MdMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="content">
      <Head title="Contact" />
      <header>
        <div className="page-title">
          <MdKeyboardArrowRight />
          <h1>Contact</h1>
        </div>
        <p>Let's get in touch!</p>
        <div className="text-icon">
          <MdMailOutline />
          <p>marulucenat@gmail.com</p>
        </div>
      </header>
      <form action="POST" data-netlify="true">
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
          <textarea
            class="text-area"
            name="message"
            id="message"
            rows="10"
            required
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
