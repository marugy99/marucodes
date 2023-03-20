import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-indigo-100 bg-no-repeat bg-fixed bg-[linear-gradient(45deg,hsla(64,41%,92%,1)4%,rgb(122,209,240)49%,rgb(208,149,234)88%)]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
