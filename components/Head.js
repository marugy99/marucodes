import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title} | Call me Maru</title>
      <meta name="description" content="Personal website" />
      <link rel="icon" href="/favicon.png" />
      <meta property="og:title" content="Call me Maru" />
      <meta
        property="og:description"
        content="Self-taught front-end developer who loves art and design."
      />
      <meta property="og:url" content="https://marucodes.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://i.imgur.com/OGre97T.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="640" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/OGre97T.png"
      />
      <meta property="twitter:site" content="@marulucenat" />
    </Head>
  );
};

export default Header;
