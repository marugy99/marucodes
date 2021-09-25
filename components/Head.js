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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&family=Roboto:wght@300;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Header;
