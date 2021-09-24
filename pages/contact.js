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
        <p>Let&apos;s get in touch!</p>
        <div className="text-icon">
          <MdMailOutline />
          <p>marulucenat@gmail.com</p>
        </div>
      </header>
      <form action="POST" data-netlify="true">
        <div className="contact-info">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="10" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
