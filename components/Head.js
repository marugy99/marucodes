import Head from "next/head";
import { useRouter } from "next/router";

const Header = ({ title, ogTitle, ogDescription, ogImage }) => {
  const router = useRouter();
  const isJournalPost = router.pathname === "/journal/[slug]";
  const currentPath = router.asPath;

  return (
    <Head>
      <title>{title} | Call me Maru</title>
      <meta name="description" content={ogDescription} />
      <link rel="icon" href="/favicon.png" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={`https://marucodes.com${currentPath}`} />
      <meta
        property="og:type"
        content={isJournalPost ? "article" : "website"}
      />
      {isJournalPost && (
        <meta property="article:publisher" content="https://marucodes.com" />
      )}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@marulucenat" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&family=Roboto:wght@300;500&display=swap&family=Roboto+Mono:wght@400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

Header.defaultProps = {
  ogTitle: "Call me Maru",
  ogDescription: "Self-taught front-end developer who loves art and design.",
  ogImage: "https://i.imgur.com/OGre97T.png",
};

export default Header;
