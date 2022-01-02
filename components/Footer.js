import { IoLogoGithub, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  return (
    <footer>
      <p>
        Made with ♥, <a href="https://nextjs.org/" rel="noreferrer" target="_blank">Next.js</a> and <a href="https://www.sanity.io/" rel="noreferrer" target="_blank"> Sanity</a> &copy; {currentYear}
      </p>
      <div className="socials">
        <a
          href="https://github.com/marugy99"
          rel="noreferrer"
          target="_blank"
          aria-label="Github logo"
        >
          <IoLogoGithub />
        </a>
        <a
          href="https://twitter.com/MaruLucenaT"
          rel="noreferrer"
          target="_blank"
          aria-label="Twitter logo"
        >
          <IoLogoTwitter />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZVfaUt_Y0N3bKUj1Riprlw/videos"
          rel="noreferrer"
          target="_blank"
          aria-label="Youtube logo"
        >
          <IoLogoYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
