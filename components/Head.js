import Head from "next/head";
import { useRouter } from "next/router";

const Header = ({ title, ogTitle, ogDescription, ogImage }) => {
  const router = useRouter();
  const isJournalPost = router.pathname === "/journal/[slug]";
  const currentPath = router.asPath;

  return (
    <Head>
      <title>{title} | Maru</title>
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
    </Head>
  );
};

Header.defaultProps = {
  ogTitle: "Maru",
  ogDescription: "Self-taught front-end developer who loves art and design.",
  ogImage: "https://i.imgur.com/HBzsdrP.png",
};

export default Header;
