import Head from "next/head";

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title} | Call me Maru</title>
      <meta name="description" content="Personal website" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default Header;
